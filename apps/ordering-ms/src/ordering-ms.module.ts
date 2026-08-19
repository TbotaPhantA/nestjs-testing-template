import { Module } from '@nestjs/common';
import { OrderingMsController } from './ordering-ms.controller';
import { OrderingMsService } from './ordering-ms.service';

@Module({
  imports: [],
  controllers: [OrderingMsController],
  providers: [OrderingMsService],
})
export class OrderingMsModule {}
