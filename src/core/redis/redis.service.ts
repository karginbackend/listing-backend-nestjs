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

	constructor(configService: ConfigService) {
		super(configService.getOrThrow<string>('REDIS_URI'));
		this.on('error', (error) => {
			this.logger.error('Redis connection error:', error.message);
		});
	}

	getClient(): Redis {
		return this;
	}

	async onModuleInit(): Promise<void> {
		try {
			await this.ping();
			this.logger.log('Connected to Redis ✅');
		} catch (error) {
			this.logger.error('Failed to connect to Redis ❌', error);
			throw error;
		}
	}

	async onModuleDestroy(): Promise<void> {
		await this.quit();
		this.logger.warn('Disconnected from Redis ❌');
	}
}
