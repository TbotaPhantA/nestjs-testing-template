import { Module } from '@nestjs/common';
import { AuthMsController } from './auth-ms.controller';
import { AuthMsService } from './auth-ms.service';

@Module({
  imports: [],
  controllers: [AuthMsController],
  providers: [AuthMsService],
})
export class AuthMsModule {}
