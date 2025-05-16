import { ConflictException, Injectable, Logger } from '@nestjs/common';
import type { User } from '@prisma/generated';

import { PrismaService } from '@/core/database/prisma/prisma.service';
import { RedisService } from '@/core/redis/redis.service';

import { CreateUserInput } from './inputs/create-user.input';

@Injectable()
export class AccountService {
	private readonly logger = new Logger(AccountService.name);
	private readonly CACHE_KEY = 'users:all';
	private readonly CACHE_TTL = 60;

	public constructor(
		private readonly prismaService: PrismaService,
		private readonly redisService: RedisService
	) {}

	public async findAll(): Promise<User[]> {
		this.logger.debug('Administrator fetching all users');

		// Check cache for users
		const cached = await this.redisService.get(this.CACHE_KEY);

		// Return users from cache
		if (cached) {
			const usersFromCache: User[] = JSON.parse(cached);
			this.logger.log(
				`Retrieved ${usersFromCache.length} users from cache`
			);
			this.logger.debug('Fetching OK, returning...');
			return usersFromCache;
		}

		// Fetch users from database
		const users = await this.prismaService.user.findMany();
		this.logger.log(`Retrieved ${users.length} users`);

		// Cache users
		await this.redisService.set(
			this.CACHE_KEY,
			JSON.stringify(users),
			'EX',
			this.CACHE_TTL
		);

		this.logger.debug('Fetching OK, returning...');
		return users;
	}

	public async createUser(input: CreateUserInput): Promise<User> {
		// Destructure input
		const { email, phoneNumber, firstName, lastName, password } = input;

		// Get user by email or phone
		const user = await this.prismaService.user.findFirst({
			where: {
				OR: [{ email }, { phoneNumber }]
			}
		});

		// Check user existence
		if (user)
			throw new ConflictException('Email or phone number already in use');

		// Create user
		const newUser = await this.prismaService.user.create({
			data: {
				email,
				firstName,
				lastName,
				phoneNumber,
				password
			}
		});

		this.logger.log(`Created new user with id ${newUser.id}`);

		// Cache invalidation
		await this.redisService.del(this.CACHE_KEY);

		return newUser;
	}
}
