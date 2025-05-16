import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/generated';

import { AccountService } from './account.service';
import { CreateUserInput } from './inputs/create-user.input';
import { UserModel } from './models/user.model';

@Resolver('Account')
export class AccountResolver {
	constructor(private readonly accountService: AccountService) {}

	@Query(() => [UserModel], { name: 'findAllUsers' })
	public async findAllUsers(): Promise<User[]> {
		return this.accountService.findAll();
	}

	@Mutation(() => UserModel, { name: 'createUser' })
	public async createUser(
		@Args('data') input: CreateUserInput
	): Promise<User> {
		return this.accountService.createUser(input);
	}
}
