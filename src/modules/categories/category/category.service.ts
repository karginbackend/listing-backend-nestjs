import { ConflictException, Injectable } from '@nestjs/common';
import { Category } from '@prisma/generated';

import { PrismaService } from '@/core/database';

import { CreateCategoryInput, UpdateCategoryInput } from './inputs';

@Injectable()
export class CategoryService {
	public constructor(private readonly prismaService: PrismaService) {}

	private async checkCategoryExists(slug?: string, id?: string) {
		const categoryExists = await this.prismaService.category.findUnique({
			where: { id, slug }
		});
		if (categoryExists)
			throw new ConflictException('Category already exists');
	}

	public async create(input: CreateCategoryInput): Promise<Category> {
		const { slug } = input;

		await this.checkCategoryExists(slug);

		return this.prismaService.category.create({
			data: {
				...input
			}
		});
	}

	public async update(
		id: string,
		input: UpdateCategoryInput
	): Promise<Category> {
		return this.prismaService.category.update({
			where: { id },
			data: {
				...input
			}
		});
	}

	public async delete(id: string): Promise<Category> {
		return this.prismaService.category.delete({
			where: { id }
		});
	}

	public async findAll(
		lang: string
	): Promise<Array<{ id: string; slug: string; title: string }>> {
		const categories = await this.prismaService.category.findMany({
			select: {
				id: true,
				slug: true,
				title_en: true,
				title_ru: true,
				title_hy: true
			}
		});

		return categories.map((category) => ({
			id: category.id,
			slug: category.slug,
			title: category[`title_${lang}` as keyof typeof category] ?? ''
		}));
	}

	public async findBySlug(slug: string) {
		return this.prismaService.category.findUnique({
			where: { slug }
		});
	}
}
