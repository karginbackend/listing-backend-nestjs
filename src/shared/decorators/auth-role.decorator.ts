import { applyDecorators } from '@nestjs/common';

import type { Roles } from '@/shared/types/role.types';

import { UserRoles } from '../guards/role.guard';

import { Authorization } from './auth.decorator';
import { RoleSecurity } from './roles.decorator';

export function AuthWithRoles(...roles: Roles[]): MethodDecorator {
	return applyDecorators(
		Authorization(),
		RoleSecurity(),
		UserRoles(...roles)
	);
}
