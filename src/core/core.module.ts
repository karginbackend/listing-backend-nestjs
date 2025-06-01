import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n';

import { getGraphQLConfig } from '@/core/config/graphql.config';
import { PrismaModule } from '@/core/database/prisma/prisma.module';
import { AccountModule } from '@/modules/auth/account/account.module';
import { SessionModule } from '@/modules/auth/session/session.module';
import { IS_DEV_ENV } from '@/shared/utils/is-dev.util';

import { getI18nConfig } from './config/i18n.config';
import { RedisModule } from './redis/redis.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, ignoreEnvFile: !IS_DEV_ENV }),
		GraphQLModule.forRootAsync({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		I18nModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: getI18nConfig,
			resolvers: [
				{ use: QueryResolver, options: ['lang'] },
				new HeaderResolver(['x-lang'])
			],
			inject: [ConfigService]
		}),
		PrismaModule,
		RedisModule,
		AccountModule,
		SessionModule
	]
})
export class CoreModule {}
