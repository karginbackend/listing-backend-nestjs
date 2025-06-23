import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	public emailOrPhoneNumber!: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	public password!: string;
}
