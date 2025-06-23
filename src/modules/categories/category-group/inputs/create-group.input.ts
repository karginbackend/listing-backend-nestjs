import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCategoryGroupInput {
	@Field()
	@IsString()
	slug: string;

	@Field()
	@IsString()
	title_en: string;

	@Field()
	@IsString()
	title_hy: string;

	@Field()
	@IsString()
	title_ru: string;
}
