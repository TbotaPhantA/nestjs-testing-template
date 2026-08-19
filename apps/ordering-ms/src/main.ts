import { NestFactory } from '@nestjs/core';
import { OrderingMsModule } from './ordering-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(OrderingMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
