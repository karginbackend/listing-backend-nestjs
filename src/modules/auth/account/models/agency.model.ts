import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { AgencyType, VerificationStatus } from '@prisma/generated';

registerEnumType(VerificationStatus, {
	name: 'VerificationStatus',
	description: 'The verification status of an agency'
});

registerEnumType(AgencyType, {
	name: 'AgencyType',
	description: 'The type of an agency'
});

@ObjectType()
export class AgencyModel {
	@Field(() => ID)
	id: string;

	@Field(() => String)
	name: string;

	@Field(() => Array(String))
	socialMediaLinks: string[];

	@Field(() => String, { nullable: true })
	bannerUrl?: string;

	@Field(() => String, { nullable: true })
	address?: string;

	@Field(() => String, { nullable: true })
	website?: string;

	@Field(() => Boolean)
	isVerified: boolean;

	@Field(() => VerificationStatus)
	verificationStatus: VerificationStatus;

	@Field(() => AgencyType)
	agencyType: AgencyType;
}
