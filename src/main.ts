import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties that do not have decorators
      forbidNonWhitelisted: true, // throw an error if properties that do not have decorators
      transform: true, // transform payloads to DTO instances
      transformOptions: {
        enableImplicitConversion: true, // enable implicit conversion
      },
    }),
  );

  app.setGlobalPrefix('api/v2');

  await app.listen(process.env.PORT);
}
bootstrap();
