import { type ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
import { join } from 'node:path';

import { GqlContext } from '@/shared/types/gql-context.types';
import { isDev } from '@/shared/utils/is-dev.util';

export function getGraphQLConfig(
	configService: ConfigService
): ApolloDriverConfig {
	return {
		introspection: isDev(configService),
		playground: false,
		graphiql: isDev(configService),
		path: configService.getOrThrow<string>('GRAPHQL_PREFIX'),
		autoSchemaFile: join(process.cwd(), 'src/core/graphql/schema.gql'),
		sortSchema: true,
		context: ({
			req,
			res
		}: {
			req: Request;
			res: Response;
		}): GqlContext => ({
			req,
			res
		})
	};
}
