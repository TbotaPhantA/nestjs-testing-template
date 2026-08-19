import { Controller, Get } from '@nestjs/common';
import { AuthMsService } from './auth-ms.service';

@Controller()
export class AuthMsController {
  constructor(private readonly authMsService: AuthMsService) {}

  @Get()
  getHello(): string {
    return this.authMsService.getHello();
  }
}
