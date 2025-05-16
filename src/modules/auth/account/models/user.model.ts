import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 * The user model
 */
@ObjectType('User', {
	description: 'The user model'
})
export class UserModel {
	/**
	 * The unique identifier of the user
	 */
	@Field(() => ID, {
		description: 'The unique identifier of the user'
	})
	public id!: string;

	/**
	 * The date and time when the user was created
	 */
	@Field(() => Date, {
		description: 'The date and time when the user was created'
	})
	public createdAt!: Date;

	/**
	 * The date and time when the user was last updated
	 */
	@Field(() => Date, {
		description: 'The date and time when the user was last updated'
	})
	public updatedAt!: Date;

	/**
	 * The first name of the user
	 */
	@Field(() => String, {
		description: 'The first name of the user'
	})
	public firstName!: string;

	/**
	 * The last name of the user
	 */
	@Field(() => String, {
		description: 'The last name of the user'
	})
	public lastName!: string;

	/**
	 * The phone number of the user
	 */
	@Field(() => String, {
		description: 'The phone number of the user'
	})
	public phoneNumber!: string;

	/**
	 * The email address of the user
	 */
	@Field(() => String, {
		description: 'The email address of the user'
	})
	public email!: string;

	/**
	 * The URL of the user's avatar image
	 */
	@Field(() => String, {
		nullable: true,
		description: "The URL of the user's avatar image"
	})
	public avatarUrl?: string;

	/**
	 * The password of the user
	 */
	@Field(() => String, {
		nullable: true,
		description: 'The password of the user'
	})
	public password?: string;
}
