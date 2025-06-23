import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { LocalizedField } from '@/shared/decorators';

import { CategoryGroupService } from './category-group.service';
import { CreateCategoryGroupInput } from './inputs';
import { CategoryGroupModel } from './models';

@Resolver(() => CategoryGroupModel)
export class CategoryGroupResolver {
	public constructor(
		private readonly categoryGroupService: CategoryGroupService
	) {}

	@Mutation(() => CategoryGroupModel, { name: 'createCategoryGroup' })
	public async createCategoryGroup(
		@Args('data') input: CreateCategoryGroupInput
	) {
		return this.categoryGroupService.create(input);
	}

	@Mutation(() => CategoryGroupModel, { name: 'updateCategoryGroup' })
	public async updateCategoryGroup(
		@Args('data') input: CreateCategoryGroupInput
	) {
		return this.categoryGroupService.update(input);
	}

	@Mutation(() => CategoryGroupModel, { name: 'deleteCategoryGroup' })
	public async deleteCategoryGroup(@Args('id') id: string) {
		return this.categoryGroupService.delete(id);
	}

	@Query(() => [CategoryGroupModel], { name: 'getAllCategoryGroups' })
	public async getAllCategoryGroups() {
		return this.categoryGroupService.findAll();
	}

	@Query(() => CategoryGroupModel, { name: 'getCategoryGroupById' })
	public async getCategoryGroupById(@Args('id') id: string) {
		return this.categoryGroupService.findById(id);
	}

	@ResolveField(() => String)
	title(@LocalizedField('title') title: string) {
		return title;
	}
}
