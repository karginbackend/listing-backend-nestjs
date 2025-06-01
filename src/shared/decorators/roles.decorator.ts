import { applyDecorators, UseGuards } from '@nestjs/common';

import { RoleGuard } from '../guards/role.guard';

export function RoleSecurity(): MethodDecorator {
	return applyDecorators(UseGuards(RoleGuard));
}
