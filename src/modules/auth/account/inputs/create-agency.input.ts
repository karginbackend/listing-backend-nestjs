// src/agency/dto/create-agency.input.ts
import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import {
	IsEmail,
	IsEnum,
	IsPhoneNumber,
	IsString,
	MaxLength,
	MinLength
} from 'class-validator';

enum AgencyType {
	ONLINE = 'ONLINE',
	OFFLINE = 'OFFLINE'
}

registerEnumType(AgencyType, {
	name: 'AgencyType',
	description: 'Type of agency (ONLINE or OFFLINE)'
});

@InputType()
export class CreateAgencyInput {
	@Field()
	@IsString({
		message: 'validations.createAgency.name.isString'
	})
	@MinLength(3, { message: 'validations.createAgency.name.minLength' })
	@MaxLength(100, { message: 'validations.createAgency.name.maxLength' })
	public name!: string;

	@Field()
	@IsPhoneNumber(undefined, {
		message: 'validations.createAgency.phoneNumber.isPhoneNumber'
	})
	public phoneNumber!: string;

	@Field()
	@IsEmail({}, { message: 'validations.createAgency.businessEmail.isEmail' })
	@MaxLength(254, {
		message: 'validations.createAgency.businessEmail.maxLength'
	})
	public email!: string;

	@Field()
	@IsEnum(AgencyType, {
		message: 'validations.createAgency.agencyType.isEnum'
	})
	public agencyType!: AgencyType;

	@Field()
	@IsString({ message: 'validations.createAgency.password.isString' })
	@MinLength(8, { message: 'validations.createAgency.password.minLength' })
	public password!: string;
}
