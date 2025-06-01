import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthWithRoles } from '@/shared/decorators/auth-role.decorator';
import { Authorization } from '@/shared/decorators/auth.decorator';
import { Authorized } from '@/shared/decorators/authorized.decorator';

import { AccountService } from './account.service';
import { CreateAgencyInput } from './inputs/create-agency.input';
import { CreateUserInput } from './inputs/create-user.input';
import { AccountModel } from './models/account.model';

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

	@AuthWithRoles('MODERATOR', 'ADMIN', 'SUPERADMIN')
	@Query(() => [AccountModel], { name: 'findAllAccounts' })
	public async findAllAccounts(): Promise<AccountModel[]> {
		return this.accountService.getAccounts();
	}
}
