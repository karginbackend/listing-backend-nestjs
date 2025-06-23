import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-facebook';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
	constructor(private configService: ConfigService) {
		super({
			clientID: configService.getOrThrow<string>('FACEBOOK_APP_ID'),
			clientSecret: configService.getOrThrow<string>(
				'FACEBOOK_APP_SECRET'
			),
			callbackURL: `${configService.getOrThrow<string>('APPLICATION_URL')}/auth/facebook/callback`,
			scope: ['email'],
			profileFields: ['id', 'emails', 'name', 'picture']
		});
	}

	async validate(
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: Function
	): Promise<any> {
		const { id, name, emails, photos } = profile;
		const user = {
			providerId: id,
			provider: 'FACEBOOK',
			email: emails?.[0]?.value,
			fullName: `${name?.givenName} ${name?.familyName}`,
			avatarUrl: photos?.[0]?.value,
			isEmailVerified: true
		};
		done(null, user);
	}
}
