import { NestFactory } from '@nestjs/core';
import { platform-fastify } from '@next/platform-fastify';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
