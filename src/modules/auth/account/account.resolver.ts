import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Authorization, Authorized, AuthWithRoles } from '@/shared/decorators';

import { AccountService } from './account.service';
import {
	CreateAgencyInput,
	CreateUserInput,
	UpdateAccountInput
} from './inputs';
import { AccountModel } from './models';

@Resolver(() => AccountModel)
export class AccountResolver {
	public constructor(private readonly accountService: AccountService) {}

	@Authorization()
	@Query(() => AccountModel, { name: 'findUserAccount' })
	public async findUserAccount(
		@Authorized('id') id: string
	): Promise<AccountModel> {
		return this.accountService.getUserAccountById(id);
	}

	@Authorization()
	@Query(() => AccountModel, { name: 'findAgencyAccount' })
	public async findAgencyAccount(
		@Authorized('id') id: string
	): Promise<AccountModel> {
		return this.accountService.getAgencyAccountById(id);
	}

	@Mutation(() => Boolean, { name: 'registerUser' })
	public async registerUser(
		@Args('data') input: CreateUserInput
	): Promise<boolean> {
		return this.accountService.createUser(input);
	}

	@Mutation(() => Boolean, { name: 'registerAgency' })
	public async registerAgency(
		@Args('data') input: CreateAgencyInput
	): Promise<boolean> {
		return this.accountService.createAgency(input);
	}

	@Mutation(() => AccountModel, { name: 'updateAccount' })
	public async updateAccount(
		@Authorized('id') accountId: string,
		@Args('data') input: UpdateAccountInput
	): Promise<AccountModel> {
		return this.accountService.updateAccount(accountId, input);
	}

	@AuthWithRoles('MODERATOR', 'ADMIN', 'SUPERADMIN')
	@Query(() => [AccountModel], { name: 'findAllAccounts' })
	public async findAllAccounts(): Promise<AccountModel[]> {
		return this.accountService.getAccounts();
	}
}
