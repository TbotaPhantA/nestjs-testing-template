import { Controller, Get } from '@nestjs/common';
import { ShippingMsService } from './shipping-ms.service';

@Controller()
export class ShippingMsController {
  constructor(private readonly shippingMsService: ShippingMsService) {}

  @Get()
  getHello(): string {
    return this.shippingMsService.getHello();
  }
}
