import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { RedisStore } from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.mjs';

import { CoreModule } from '@/core/core.module';
import { RedisService } from '@/core/redis';
import { IS_DEV_ENV, ms, parseBool, type StringValue } from '@/shared/utils';

async function bootstrap() {
	const app = await NestFactory.create(CoreModule, {
		logger: IS_DEV_ENV
			? ['log', 'error', 'warn', 'verbose', 'debug']
			: ['error', 'warn', 'log']
	});

	const logger = new Logger('NestApplication');

	const config = app.get(ConfigService);
	const redis = app.get(RedisService);

	app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

	// app.useGlobalPipes(
	// 	new I18nValidationPipe({
	// 		transform: true
	// 	})
	// );

	app.use(
		session({
			secret: config.getOrThrow<string>('SESSION_SECRET'),
			name: config.getOrThrow<string>('SESSION_NAME'),
			resave: false,
			saveUninitialized: false,
			cookie: {
				domain: config.getOrThrow<string>('SESSION_DOMAIN'),
				maxAge: ms(config.getOrThrow<StringValue>('SESSION_MAX_AGE')),
				httpOnly: parseBool(
					config.getOrThrow<string>('SESSION_HTTP_ONLY')
				),
				secure: parseBool(config.getOrThrow<string>('SESSION_SECURE')),
				sameSite: 'lax'
			},
			store: new RedisStore({
				client: redis,
				prefix: config.getOrThrow<string>('SESSION_FOLDER')
			})
		})
	);

	app.use(
		'/graphql',
		graphqlUploadExpress({ maxFileSize: 10 * 1024 * 1024, maxFiles: 10 })
	);

	app.enableCors({
		origin: config.getOrThrow<string>('CORS_ORIGIN'),
		credentials: true
	});

	await app.listen(config.getOrThrow<number>('APPLICATION_PORT') ?? 4000);

	logger.log(`Application is running on ${await app.getUrl()}`);
}

void bootstrap();
