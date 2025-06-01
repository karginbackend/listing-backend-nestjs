import {
	CanActivate,
	ExecutionContext,
	Injectable,
	SetMetadata,
	UnauthorizedException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import type { Request } from 'express';

import type { Roles } from '@/shared/types/role.types';

const ROLES_KEY = 'roles';

export const UserRoles = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);

@Injectable()
export class RoleGuard implements CanActivate {
	constructor(private reflector: Reflector) {}

	async canActivate(context: ExecutionContext): Promise<boolean> {
		const requiredRoles = this.reflector.getAllAndOverride<Roles[]>(
			ROLES_KEY,
			[context.getHandler(), context.getClass()]
		);

		if (!requiredRoles || requiredRoles.length === 0) {
			return true;
		}

		const ctx = GqlExecutionContext.create(context);
		const req: Request = ctx.getContext<{ req: Request }>().req;

		if (!req.account?.role) {
			throw new UnauthorizedException(
				'User not authenticated or role not found'
			);
		}

		return requiredRoles.includes(req.account.role);
	}
}
