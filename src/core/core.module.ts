import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { getGraphQLConfig } from '@/core/config/graphql.config';
import { PrismaModule } from '@/core/database/prisma/prisma.module';
import { RedisModule } from '@/core/redis/redis.module';
import { AccountModule } from '@/modules/auth/account/account.module';
import { SessionModule } from '@/modules/auth/session/session.module';
import { IS_DEV_ENV } from '@/shared/utils/is-dev.util';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, ignoreEnvFile: !IS_DEV_ENV }),
		GraphQLModule.forRootAsync({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		PrismaModule,
		RedisModule,
		AccountModule,
		SessionModule
	]
})
export class CoreModule {}
