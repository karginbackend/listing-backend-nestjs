import { Field, InputType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';

@InputType('CreateCategoryInput')
export class CreateCategoryInput {
	@Field()
	@IsString()
	@Length(3, 100)
	slug: string;

	@Field()
	@IsString()
	groupId: string;

	@Field()
	@IsString()
	@Length(3, 100)
	title_en: string;

	@Field()
	@IsString()
	@Length(3, 100)
	title_hy: string;

	@Field()
	@IsString()
	@Length(3, 100)
	title_ru: string;

	@Field()
	@IsString()
	@Length(3, 255)
	description_en: string;

	@Field()
	@IsString()
	@Length(3, 255)
	description_hy: string;

	@Field()
	@IsString()
	@Length(3, 255)
	description_ru: string;
}
