import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { Account, Agency, User } from '@prisma/generated';
import { hash } from 'argon2';

import { PrismaService } from '@/core/database/prisma/prisma.service';

import { CreateAgencyInput } from './inputs/create-agency.input';
import { CreateUserInput } from './inputs/create-user.input';

@Injectable()
export class AccountService {
	// Logger
	private readonly logger = new Logger(AccountService.name);

	// Constructor
	public constructor(private readonly prismaService: PrismaService) {}

	private async checkAccountExists(
		email: string,
		phoneNumber: string,
		name?: string
	): Promise<void> {
		const exists = await this.prismaService.account.findFirst({
			where: {
				OR: [
					{ email },
					{ phoneNumber },
					name ? { agency: { name } } : {}
				]
			}
		});
		if (exists) throw new ConflictException('Account already exists');
	}

	// Method for create user
	public async createUser(input: CreateUserInput): Promise<boolean> {
		const { email, fullName, password, phoneNumber } = input;

		await this.checkAccountExists(email, phoneNumber);

		const passwordHash = (await hash(password)) as string;

		await this.prismaService.$transaction(async (tx) => {
			const account = await tx.account.create({
				data: {
					email,
					password: passwordHash,
					phoneNumber
				}
			});

			await tx.user.create({
				data: {
					fullName,
					accountId: account.id
				}
			});
		});

		return true;
	}

	public async createAgency(input: CreateAgencyInput): Promise<boolean> {
		const { email, phoneNumber, name, password, agencyType } = input;

		await this.checkAccountExists(email, phoneNumber, name);

		const passwordHash = await hash(password);

		await this.prismaService.$transaction(async (tx) => {
			const account = await tx.account.create({
				data: {
					email,
					password: passwordHash,
					phoneNumber,
					role: 'AGENCY'
				}
			});

			await tx.agency.create({
				data: {
					name,
					agencyType,
					accountId: account.id
				}
			});
		});

		return true;
	}

	public async getAccounts(): Promise<Account[]> {
		return (
			this.prismaService.account.findMany({
				include: {
					user: true,
					agency: true
				}
			}) || []
		);
	}

	public async getUserAccountById(id: string): Promise<Account> {
		return this.prismaService.account.findUnique({
			where: { id },
			include: {
				user: true
			}
		});
	}

	public async getAgencyAccountById(id: string): Promise<Account> {
		return this.prismaService.account.findUnique({
			where: { id },
			include: {
				agency: true
			}
		});
	}

	public async getUserByAccountId(accountId: string): Promise<User | null> {
		return this.prismaService.user.findUnique({
			where: { accountId }
		});
	}

	public async getAgencyByAccountId(
		accountId: string
	): Promise<Agency | null> {
		return this.prismaService.agency.findUnique({
			where: { accountId }
		});
	}
}
