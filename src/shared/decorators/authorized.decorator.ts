import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Account } from '@prisma/generated';
import { Request } from 'express';

export const Authorized = createParamDecorator(
	(data: keyof Account, ctx: ExecutionContext): Account | any => {
		let req: Request;
		if (ctx.getType() === 'http') {
			req = ctx.switchToHttp().getRequest<Request>();
		} else {
			const gqlCtx = GqlExecutionContext.create(ctx);
			req = gqlCtx.getContext<{ req: Request }>().req;
		}

		const account = req.account;

		if (!account) {
			throw new Error('No authenticated entity found.');
		}

		if (data) {
			return account[data];
		}

		return account;
	}
);
