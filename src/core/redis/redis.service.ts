import {
	Injectable,
	Logger,
	OnModuleDestroy,
	OnModuleInit
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis from 'ioredis';

@Injectable()
export class RedisService
	extends Redis
	implements OnModuleInit, OnModuleDestroy
{
	private readonly logger = new Logger(RedisService.name);

	public constructor(configService: ConfigService) {
		super(configService.getOrThrow<string>('REDIS_URI'));
	}

	public getClient(): Redis {
		return this;
	}

	public async onModuleInit(): Promise<void> {
		try {
			await this.ping();
			this.logger.log('Connected to Redis ✅');
		} catch (error) {
			const message =
				error instanceof Error ? error.message : String(error);
			this.logger.error('Failed connect to Redis ❌', message);
			throw error;
		}
	}

	public async onModuleDestroy(): Promise<void> {
		await this.quit();
		this.logger.warn('Disconnected from Redis ❌');
	}
}
