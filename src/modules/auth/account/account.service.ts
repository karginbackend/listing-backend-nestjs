import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { Account, Agency, Role, User } from '@prisma/generated';
import { hash } from 'argon2';

import { PrismaService } from '@/core/database';

import {
	CreateAgencyInput,
	CreateUserInput,
	UpdateAccountInput
} from './inputs';

@Injectable()
export class AccountService {
	private readonly logger = new Logger(AccountService.name);

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

		if (exists) {
			const conflictField =
				exists.email === email
					? 'email'
					: exists.phoneNumber === phoneNumber
						? 'phone'
						: 'agency name';

			throw new ConflictException(
				`Account with this ${conflictField} already exists`
			);
		}
	}

	public async createUser(input: CreateUserInput): Promise<boolean> {
		const { email, fullName, password, phoneNumber } = input;

		await this.checkAccountExists(email, phoneNumber);

		const passwordHash: string = await hash(password);

		this.logger.log(`Creating account: email=${email}`);

		await this.prismaService.$transaction(async (tx) => {
			const account = await tx.account.create({
				data: {
					email,
					password: passwordHash,
					phoneNumber
				}
			});

			this.logger.log(`Account created (user): id=${account.id}`);

			const user = await tx.user.create({
				data: {
					fullName,
					accountId: account.id
				}
			});

			this.logger.log(
				`User (id=${user.id}) linked to account: fullName=${fullName}`
			);
		});

		return true;
	}

	public async createAgency(input: CreateAgencyInput): Promise<boolean> {
		const { email, phoneNumber, name, password, agencyType } = input;

		await this.checkAccountExists(email, phoneNumber, name);

		const passwordHash: string = await hash(password);

		this.logger.log(`Creating account: email=${email}, agencyName=${name}`);

		await this.prismaService.$transaction(async (tx) => {
			const account = await tx.account.create({
				data: {
					email,
					password: passwordHash,
					phoneNumber,
					role: Role.AGENCY
				}
			});
			this.logger.log(`Account created (agency): id=${account.id}`);

			const agency = await tx.agency.create({
				data: {
					name,
					agencyType,
					accountId: account.id
				}
			});
			this.logger.log(
				`Agency (id=${agency.id}) linked to account: id=${account.id}`
			);
		});

		return true;
	}

	public async updateAccount(
		id: string,
		input: UpdateAccountInput
	): Promise<Account> {
		const { avatarUrl, email, phoneNumber } = input;

		this.logger.log(`Updating account: id=${id}`);

		const updatedAccount = await this.prismaService.account.update({
			where: { id },
			data: {
				email,
				phoneNumber,
				avatarUrl
			}
		});

		this.logger.log(`Account updated: id=${id}`);

		return updatedAccount;
	}

	public async getAccounts(): Promise<Account[]> {
		return this.prismaService.account.findMany({
			include: {
				user: true,
				agency: true
			}
		});
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
