import { Account } from '@prisma/generated';

declare module 'express' {
	interface Request {
		account: Account;
	}
}
