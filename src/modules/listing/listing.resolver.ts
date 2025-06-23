import { Resolver } from '@nestjs/graphql';

import { ListingService } from './listing.service';

@Resolver('Listing')
export class ListingResolver {
	public constructor(private readonly listingService: ListingService) {}
}
