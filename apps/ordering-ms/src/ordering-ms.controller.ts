import { Controller, Get } from '@nestjs/common';
import { OrderingMsService } from './ordering-ms.service';

@Controller()
export class OrderingMsController {
  constructor(private readonly orderingMsService: OrderingMsService) {}

  @Get()
  getHello(): string {
    return this.orderingMsService.getHello();
  }
}
