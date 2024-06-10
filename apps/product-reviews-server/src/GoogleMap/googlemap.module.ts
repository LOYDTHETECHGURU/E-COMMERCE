import { Module } from "@nestjs/common";
import { GoogleMapService } from "./googlemap.service";
import { GoogleMapController } from "./googlemap.controller";
import { GoogleMapResolver } from "./googlemap.resolver";

@Module({
  controllers: [GoogleMapController],
  providers: [GoogleMapService, GoogleMapResolver],
  exports: [GoogleMapService],
})
export class GoogleMapModule {}
