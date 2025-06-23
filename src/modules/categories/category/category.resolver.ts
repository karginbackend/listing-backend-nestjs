import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { I18n, I18nContext } from 'nestjs-i18n';

import { LocalizedField } from '@/shared/decorators';

import { CategoryService } from './category.service';
import { CreateCategoryInput, UpdateCategoryInput } from './inputs';
import { CategoryModel } from './models';

@Resolver(() => CategoryModel)
export class CategoryResolver {
	public constructor(private readonly categoryService: CategoryService) {}

	@Mutation(() => CategoryModel, { name: 'createCategory' })
	public async createCategory(@Args('data') input: CreateCategoryInput) {
		return this.categoryService.create(input);
	}

	@Mutation(() => CategoryModel, { name: 'updateCategory' })
	public async updateCategory(
		@Args('id') id: string,
		@Args('data') input: UpdateCategoryInput
	) {
		return this.categoryService.update(id, input);
	}

	@Mutation(() => Boolean, { name: 'deleteCategory' })
	public async deleteCategory(@Args('id') id: string) {
		await this.categoryService.delete(id);
	}

	@Query(() => [CategoryModel], { name: 'getAllCategories' })
	public async getAllCategories(@I18n() i18n: I18nContext) {
		const lang = i18n.lang;
		return this.categoryService.findAll(lang);
	}

	@Query(() => CategoryModel, { name: 'getCategoryBySlug' })
	public async getCategoryBySlug(@Args('slug') slug: string) {
		return this.categoryService.findBySlug(slug);
	}

	@ResolveField(() => String)
	title(@LocalizedField('title') title: string) {
		return title;
	}

	@ResolveField(() => String)
	description(@LocalizedField('description') description: string) {
		return description;
	}
}
