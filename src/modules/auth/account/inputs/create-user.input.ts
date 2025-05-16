import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	public email!: string;

	@Field()
	@IsString()
	public phoneNumber!: string;

	@Field()
	@IsString()
	public firstName!: string;

	@Field()
	@IsString()
	public lastName!: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	public password!: string;
}
