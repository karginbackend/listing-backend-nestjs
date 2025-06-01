import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AccountModel } from '@/modules/auth/account/models/account.model';
import { Authorization } from '@/shared/decorators/auth.decorator';
import { Authorized } from '@/shared/decorators/authorized.decorator';
import type { GqlContext } from '@/shared/types/gql-context.types';

import { LoginInput } from './inputs/login.input';
import { SessionService } from './session.service';

@Resolver('Session')
export class SessionResolver {
	public constructor(private readonly sessionService: SessionService) {}

	@Mutation(() => AccountModel, { name: 'login' })
	public async login(
		@Context() { req }: GqlContext,
		@Args('data') input: LoginInput
	): Promise<AccountModel> {
		return this.sessionService.login(req, input);
	}

	@Mutation(() => Boolean, { name: 'logout' })
	public async logout(@Context() { req }: GqlContext): Promise<boolean> {
		return this.sessionService.logout(req);
	}

	@Authorization()
	@Query(() => Boolean, { name: 'checkAuth' })
	public async checkAuth(
		@Context() { req }: GqlContext,
		@Authorized('id') accountId: string
	): Promise<boolean> {
		return this.sessionService.checkAuth(req, accountId);
	}
}
