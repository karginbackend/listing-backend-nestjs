import {
	Injectable,
	InternalServerErrorException,
	Logger
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Account } from '@prisma/generated';
import { verify } from 'argon2';
import type { Request } from 'express';
import { I18nService } from 'nestjs-i18n';

import { PrismaService } from '@/core/database';

import { LoginInput } from './inputs';

@Injectable()
export class SessionService {
	private readonly logger = new Logger(SessionService.name);

	public constructor(
		private readonly prismaService: PrismaService,
		private readonly configService: ConfigService,
		private readonly i18n: I18nService
	) {}

	public async login(req: Request, input: LoginInput): Promise<Account> {
		const { emailOrPhoneNumber, password } = input;

		const account = await this.prismaService.account.findFirst({
			where: {
				OR: [
					{
						email: emailOrPhoneNumber
					},
					{
						phoneNumber: emailOrPhoneNumber
					}
				]
			},
			include: {
				user: true,
				agency: true
			}
		});

		if (!account) {
			throw new Error('Account not found');
		}

		const isValid = await verify(account.password, password);

		if (!isValid) {
			throw new Error('Invalid password');
		}

		return new Promise((resolve, reject) => {
			req.session.createdAt = new Date();
			req.session.accountId = account.id;
			req.session.role = account.role;
			req.session.save((err) => {
				if (err) {
					this.logger.error(err);
					reject(
						new InternalServerErrorException('Error saving session')
					);
				} else {
					resolve(account);
				}
			});
		});
	}

	public async logout(req: Request): Promise<boolean> {
		return new Promise((resolve, reject) => {
			req.session.destroy((err) => {
				if (err) {
					this.logger.error(err);
					return reject(
						new InternalServerErrorException(
							'Error destroying session'
						)
					);
				} else {
					req.res.clearCookie(
						this.configService.getOrThrow<string>('SESSION_NAME')
					);
					return resolve(true);
				}
			});
		});
	}

	public async checkAuth(req: Request, accountId: string): Promise<boolean> {
		if (!req.session?.accountId && req.session.accountId !== accountId) {
			return false;
		}

		req.session.touch();

		return true;
	}
}
