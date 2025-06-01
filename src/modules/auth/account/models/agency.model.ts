import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AgencyModel {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => String)
	agencyType: string;
}
