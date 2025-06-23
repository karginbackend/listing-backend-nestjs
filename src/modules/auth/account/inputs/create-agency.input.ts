import { Field, InputType } from '@nestjs/graphql';
import { AgencyType } from '@prisma/generated';
import {
	IsEmail,
	IsEnum,
	IsPhoneNumber,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator';

@InputType()
export class CreateAgencyInput {
	@Field()
	@IsString()
	@MinLength(3)
	@MaxLength(100)
	public name!: string;

	@Field()
	@IsPhoneNumber()
	public phoneNumber!: string;

	@Field()
	@IsEmail()
	@MaxLength(254)
	public email!: string;

	@Field()
	@IsEnum(AgencyType)
	public agencyType!: AgencyType;

	@Field()
	@IsString()
	@MinLength(8)
	public password!: string;
}
