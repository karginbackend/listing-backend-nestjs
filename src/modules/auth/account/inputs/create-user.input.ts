import { Field, InputType } from '@nestjs/graphql';
import {
	IsEmail,
	IsNotEmpty,
	IsPhoneNumber,
	IsString,
	Length
} from 'class-validator';

@InputType()
export class CreateUserInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	@Length(3, 100)
	public fullName!: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	@IsEmail()
	@Length(1, 254)
	public email!: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	@Length(8, 100)
	public password!: string;

	@Field()
	@IsPhoneNumber()
	public phoneNumber!: string;
}
