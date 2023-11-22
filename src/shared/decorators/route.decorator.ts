import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default class Route {
  protected static controller({
    controller,
    swagger,
  }: {
    controller: string;
    swagger: string;
  }) {
    return applyDecorators(Controller(controller), ApiTags(swagger));
  }
}
