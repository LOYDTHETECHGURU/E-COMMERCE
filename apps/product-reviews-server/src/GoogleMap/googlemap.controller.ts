import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GoogleMapService } from "./googlemap.service";

@swagger.ApiTags("googleMaps")
@common.Controller("googleMaps")
export class GoogleMapController {
  constructor(protected readonly service: GoogleMapService) {}

  @common.Get("/:id/search-nearest-nike-shop")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SearchNearestNikeShop(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SearchNearestNikeShop(body);
      }
}
