import { Module } from '@nestjs/common';
import { ShippingMsController } from './shipping-ms.controller';
import { ShippingMsService } from './shipping-ms.service';

@Module({
  imports: [],
  controllers: [ShippingMsController],
  providers: [ShippingMsService],
})
export class ShippingMsModule {}
