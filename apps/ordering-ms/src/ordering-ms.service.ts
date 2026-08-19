import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderingMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
