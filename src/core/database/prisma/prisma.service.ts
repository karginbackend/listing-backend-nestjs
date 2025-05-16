import {
	Injectable,
	Logger,
	OnModuleDestroy,
	OnModuleInit
} from '@nestjs/common';
import { PrismaClient } from '@prisma/generated';

@Injectable()
export class PrismaService
	extends PrismaClient
	implements OnModuleInit, OnModuleDestroy
{
	private readonly logger = new Logger(PrismaService.name);

	async onModuleInit() {
		try {
			await this.$connect();
			this.logger.log('Connected to the database ✅');
		} catch (error) {
			this.logger.error('Error connecting to the database ❌', error);
			throw error;
		}
	}

	async onModuleDestroy() {
		await this.$disconnect();
		this.logger.log('Disconnected from the database ❌');
	}
}
