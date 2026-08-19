import { Test, TestingModule } from '@nestjs/testing';
import { ShippingMsController } from './shipping-ms.controller';
import { ShippingMsService } from './shipping-ms.service';

describe('ShippingMsController', () => {
  let shippingMsController: ShippingMsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShippingMsController],
      providers: [ShippingMsService],
    }).compile();

    shippingMsController = app.get<ShippingMsController>(ShippingMsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(shippingMsController.getHello()).toBe('Hello World!');
    });
  });
});
