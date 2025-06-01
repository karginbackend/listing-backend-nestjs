import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class LoginInput {
	@Field()
	@IsString()
	@IsNotEmpty()
	public emailOrPhoneNumber!: string;

	@Field()
	@IsString({ message: 'validations.login.password.isString' })
	@IsNotEmpty({ message: 'validations.login.password.isNotEmpty' })
	public password!: string;
}
