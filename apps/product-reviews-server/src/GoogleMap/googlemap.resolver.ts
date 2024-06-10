import * as graphql from "@nestjs/graphql";
import { GoogleMapService } from "./googlemap.service";

export class GoogleMapResolver {
  constructor(protected readonly service: GoogleMapService) {}

  @graphql.Query(() => String)
  async SearchNearestNikeShop(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SearchNearestNikeShop(args);
  }
}
