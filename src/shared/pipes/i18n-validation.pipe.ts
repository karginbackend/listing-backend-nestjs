import {
	BadRequestException,
	Injectable,
	ValidationPipe
} from '@nestjs/common';
import { ValidationError } from 'class-validator';
import { I18nContext, I18nService } from 'nestjs-i18n';

@Injectable()
export class I18nValidationPipe extends ValidationPipe {
	constructor(private readonly i18n: I18nService) {
		super({
			transform: true,
			validateCustomDecorators: true,
			exceptionFactory: (errors: ValidationError[]) =>
				this.createException(errors)
		});
	}

	private createException(errors: ValidationError[]) {
		const lang = I18nContext.current()?.lang || 'hy';
		const formattedErrors = errors.map((error) => {
			const constraints = error.constraints || {};
			const messages = Object.keys(constraints).reduce(
				(acc, key) => {
					const translation = this.i18n.t(constraints[key], { lang });
					acc[key] =
						typeof translation === 'string' ? translation : '';
					return acc;
				},
				{} as Record<string, string>
			);
			return {
				property: error.property,
				constraints: messages,
				children: error.children
			};
		});
		return new BadRequestException(formattedErrors);
	}
}
