import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateAccountInput {
	@Field({ nullable: true })
	email?: string;

	@Field({ nullable: true })
	phoneNumber?: string;

	@Field({ nullable: true })
	avatarUrl?: string;
}
