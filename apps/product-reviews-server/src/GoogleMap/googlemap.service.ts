import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleMapService {
  constructor() {}
  async SearchNearestNikeShop(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
