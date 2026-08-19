import { NestFactory } from '@nestjs/core';
import { ShippingMsModule } from './shipping-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(ShippingMsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
