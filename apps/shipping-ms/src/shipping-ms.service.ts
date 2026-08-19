import { Injectable } from '@nestjs/common';

@Injectable()
export class ShippingMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
