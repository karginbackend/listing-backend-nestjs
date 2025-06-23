import { Module } from '@nestjs/common';

import { CategoryGroupResolver } from './category-group.resolver';
import { CategoryGroupService } from './category-group.service';

@Module({
	providers: [CategoryGroupResolver, CategoryGroupService]
})
export class CategoryGroupModule {}
