import { InputType } from '@nestjs/graphql';

@InputType()
export class CreateAgency {
	name!: string;
	phoneNumber!: string;
	email!: string;
	password!: string;
}
