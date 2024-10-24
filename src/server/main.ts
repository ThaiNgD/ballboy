import { NestFactory } from '@nestjs/core';
import { PORT } from '../shared/constants/env';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
}
bootstrap();
