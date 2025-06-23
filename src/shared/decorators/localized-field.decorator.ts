import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

/**
 * Фабрика декоратора: принимает ключ, возвращает параметр-декоратор
 */
export function LocalizedField(baseKey: string) {
	return createParamDecorator(
		(_: unknown, context: ExecutionContext): string => {
			const gqlContext = GqlExecutionContext.create(context);
			const parent = gqlContext.getRoot();
			const lang = gqlContext.getContext().req?.i18nLang ?? 'hy';

			return (
				parent?.[`${baseKey}_${lang}`] ??
				parent?.[`${baseKey}_hy`] ??
				''
			);
		}
	)();
}
