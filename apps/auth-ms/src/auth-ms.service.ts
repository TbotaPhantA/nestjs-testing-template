import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
