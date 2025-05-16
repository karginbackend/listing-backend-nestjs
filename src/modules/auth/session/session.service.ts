import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/core/database/prisma/prisma.service';

@Injectable()
export class SessionService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async login() {}

	public async logout() {}
}
