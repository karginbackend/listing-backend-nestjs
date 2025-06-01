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

	async onModuleInit(): Promise<void> {
		try {
			await this.$connect();
			this.logger.log('Connected to the database ✅');
		} catch (error) {
			const message =
				error instanceof Error ? error.message : String(error);
			this.logger.error('Error connecting to the database ❌', message);
			throw error;
		}
	}

	async onModuleDestroy(): Promise<void> {
		await this.$disconnect();
		this.logger.log('Disconnected from the database ❌');
	}
}
