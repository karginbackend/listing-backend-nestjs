import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Category')
export class CategoryModel {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	title: string;

	@Field(() => String)
	description: string;
}
