import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

export interface GoogleProfile {
	id: string;
	displayName: string;
	emails: Array<{ value: string; verified: boolean }>;
	photos: Array<{ value: string }>;
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
	public constructor(private configService: ConfigService) {
		super({
			clientID: configService.getOrThrow<string>('GOOGLE_CLIENT_ID'),
			clientSecret: configService.getOrThrow<string>(
				'GOOGLE_CLIENT_SECRET'
			),
			callbackURL: `${configService.getOrThrow<string>('APPLICATION_URL')}/auth/google/callback`,
			scope: ['email', 'profile']
		});
	}

	public async validate(
		accessToken: string,
		refreshToken: string,
		profile: GoogleProfile,
		done: VerifyCallback
	): Promise<any> {
		const { id, displayName, emails, photos } = profile;
		const user = {
			providerId: id,
			provider: 'GOOGLE',
			email: emails[0].value,
			fullName: displayName,
			avatarUrl: photos[0]?.value,
			isEmailVerified: emails[0].verified
		};
		done(null, user);
	}
}
