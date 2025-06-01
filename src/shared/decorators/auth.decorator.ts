import { applyDecorators, UseGuards } from '@nestjs/common';

import { GqlAuthGuard } from '../guards/gql-auth.guard';

export function Authorization(): MethodDecorator {
	return applyDecorators(UseGuards(GqlAuthGuard));
}
