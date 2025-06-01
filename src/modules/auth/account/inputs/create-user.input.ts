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
	@Length(3, 100, {
		message: 'validations.createUser.fullName.length'
	})
	public fullName!: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	@IsEmail({}, { message: 'validations.createUser.email.isEmail' })
	@Length(1, 254, { message: 'validations.createUser.email.maxLength' })
	public email!: string;

	@Field()
	@IsString()
	@IsNotEmpty()
	@Length(8, 100, {
		message: 'validations.createUser.password.minLength'
	})
	public password!: string;

	@Field()
	@IsPhoneNumber(undefined, {
		message: 'validations.createUser.phoneNumber.isPhoneNumber'
	})
	public phoneNumber!: string;
}
