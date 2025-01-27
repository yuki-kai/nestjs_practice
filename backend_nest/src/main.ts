import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { PracticeInterceptor } from './common/interceptors/practice/practice.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app
    .useGlobalFilters(new HttpExceptionFilter())
    .useGlobalInterceptors(new PracticeInterceptor());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
