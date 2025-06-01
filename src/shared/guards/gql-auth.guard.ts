import {
	CanActivate,
	ExecutionContext,
	Injectable,
	InternalServerErrorException,
	UnauthorizedException
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { Request } from 'express';
import { I18nService } from 'nestjs-i18n';

import { PrismaService } from '@/core/database/prisma/prisma.service';

@Injectable()
export class GqlAuthGuard implements CanActivate {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly i18n: I18nService
	) {}

	public async canActivate(context: ExecutionContext): Promise<boolean> {
		const ctx = GqlExecutionContext.create(context);
		const req: Request = ctx.getContext<{ req: Request }>().req;

		if (!req.session?.accountId) {
			throw new UnauthorizedException(
				this.i18n.translate('exceptions.sessions.noSession')
			);
		}

		const { accountId } = req.session;

		const account = await this.prismaService.account.findUnique({
			where: {
				id: accountId
			},
			include: {
				user: true,
				agency: true
			}
		});

		if (!account) {
			throw new InternalServerErrorException(
				this.i18n.translate('exceptions.sessions.accountNotFound')
			);
		}

		req.account = account;

		return true;
	}
}
