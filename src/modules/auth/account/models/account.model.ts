import { Field, ID, ObjectType } from '@nestjs/graphql';

import { AgencyModel } from './agency.model';
import { UserModel } from './user.model';

@ObjectType()
export class AccountModel {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	email: string;

	@Field(() => String)
	phoneNumber: string;

	@Field(() => String)
	avatarUrl: string;

	@Field(() => Date)
	createdAt: Date;

	@Field(() => Date)
	updatedAt: Date;

	@Field(() => Boolean)
	isEmailVerified: boolean;

	@Field(() => Number)
	rating: number;

	@Field(() => String)
	role: string;

	@Field(() => UserModel, { nullable: true })
	user?: UserModel;

	@Field(() => AgencyModel, { nullable: true })
	agency?: AgencyModel;
}
