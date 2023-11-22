import { applyDecorators } from '@nestjs/common';
import Route from 'src/shared/decorators/route.decorator';

export default class BikeRouter extends Route {
  public static default() {
    return applyDecorators(
      this.controller({ controller: 'bike', swagger: 'Bike' }),
    );
  }
}
