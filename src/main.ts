import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { RedisStore } from 'connect-redis';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

import { CoreModule } from '@/core/core.module';
import { RedisService } from '@/core/redis/redis.service';
import { IS_DEV_ENV } from '@/shared/utils/is-dev.util';
import { ms, type StringValue } from '@/shared/utils/ms.util';
import { parseBool } from '@/shared/utils/parse-bool.util';

async function bootstrap() {
	const app = await NestFactory.create(CoreModule, {
		logger: IS_DEV_ENV
			? ['log', 'error', 'warn', 'debug']
			: ['error', 'warn']
	});

	const config = app.get(ConfigService);
	const redis = app.get(RedisService);

	app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

	app.useGlobalPipes(new ValidationPipe({ transform: true }));

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

	app.enableCors({
		origin: config.getOrThrow<string>('CORS_ORIGIN'),
		credentials: true,
		exposedHeaders: ['set-cookie']
	});

	await app.listen(config.getOrThrow<number>('APPLICATION_PORT') ?? 4000);
}

void bootstrap();
