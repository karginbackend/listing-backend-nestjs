import { ConflictException, Injectable } from '@nestjs/common';
import { CategoryGroup } from '@prisma/generated';

import { PrismaService } from '@/core/database';

import { CreateCategoryGroupInput, UpdateCategoryGroupInput } from './inputs';

@Injectable()
export class CategoryGroupService {
	public constructor(private readonly prismaService: PrismaService) {}

	private async checkExists(slug: string) {
		const isExists = await this.prismaService.categoryGroup.findUnique({
			where: {
				slug
			}
		});

		if (isExists) {
			throw new ConflictException('Category group already exists');
		}
	}

	public async create(
		input: CreateCategoryGroupInput
	): Promise<CategoryGroup> {
		const { slug, title_en, title_hy, title_ru } = input;

		await this.checkExists(slug);

		return this.prismaService.categoryGroup.create({
			data: {
				slug,
				title_en,
				title_hy,
				title_ru
			}
		});
	}

	public async update(
		input: UpdateCategoryGroupInput
	): Promise<CategoryGroup> {
		const { slug, title_en, title_hy, title_ru } = input;

		return this.prismaService.categoryGroup.update({
			where: {
				slug
			},
			data: {
				title_en,
				title_hy,
				title_ru
			}
		});
	}

	public async delete(id: string): Promise<CategoryGroup> {
		return this.prismaService.categoryGroup.delete({
			where: {
				id
			}
		});
	}

	public async findAll(): Promise<CategoryGroup[]> {
		return this.prismaService.categoryGroup.findMany();
	}

	public async findById(id: string): Promise<CategoryGroup> {
		return this.prismaService.categoryGroup.findUnique({
			where: {
				id
			}
		});
	}
}
