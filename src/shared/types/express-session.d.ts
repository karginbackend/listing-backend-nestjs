import 'express-session';

import { Roles } from './role.types';

declare module 'express-session' {
	interface SessionData {
		accountId?: string;
		createdAt?: Date | string;
		role?: Roles;
	}
}
