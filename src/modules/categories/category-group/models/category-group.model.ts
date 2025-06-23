import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('CategoryGroup')
export class CategoryGroupModel {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	title: string;
}
