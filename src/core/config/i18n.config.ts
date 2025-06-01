import { ConfigService } from '@nestjs/config';
import { I18nOptions } from 'nestjs-i18n';
import { join } from 'node:path';

export function getI18nConfig(configService: ConfigService): I18nOptions {
	return {
		fallbackLanguage: configService.getOrThrow<string>(
			'FALLBACK_LANGUAGE',
			'hy'
		),
		loaderOptions: {
			path: join(__dirname, '../i18n'),
			watch: true
		}
	};
}
