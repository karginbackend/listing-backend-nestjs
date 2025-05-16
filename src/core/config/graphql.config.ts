import { type ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import type { Request, Response } from 'express';
import { join } from 'node:path';

import { isDev } from '@/shared/utils/is-dev.util';

interface GraphQLContext {
	req: Request;
	res: Response;
}

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
		}): GraphQLContext => ({
			req,
			res
		})
	};
}
