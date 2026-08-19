import { Test, TestingModule } from '@nestjs/testing';
import { OrderingMsController } from './ordering-ms.controller';
import { OrderingMsService } from './ordering-ms.service';

describe('OrderingMsController', () => {
  let orderingMsController: OrderingMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [OrderingMsController],
      providers: [OrderingMsService],
    }).compile();

    orderingMsController = app.get<OrderingMsController>(OrderingMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(orderingMsController.getHello()).toBe('Hello World!');
    });
  });
});
