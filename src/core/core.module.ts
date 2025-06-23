import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { HeaderResolver, I18nModule, QueryResolver } from 'nestjs-i18n';

import {
	AccountModule,
	CategoryGroupModule,
	CategoryModule,
	FileModule,
	ListingModule,
	SessionModule
} from '@/modules';
import { IS_DEV_ENV } from '@/shared/utils';

import { getGraphQLConfig, getI18nConfig } from './config';
import { PrismaModule } from './database';
import { RedisModule } from './redis';

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
		SessionModule,
		CategoryModule,
		CategoryGroupModule,
		ListingModule,
		FileModule
	]
})
export class CoreModule {}
