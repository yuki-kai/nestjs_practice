import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { PracticeInterceptor } from './common/interceptors/practice/practice.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // cors: {},
    cors: {
      "origin": ["http://localhost:3000"],
      "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204,
      // "allowedHeaders": ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'], // これを追加するとエラーになる
    }
  });

  app
    .useGlobalFilters(new HttpExceptionFilter())
    .useGlobalInterceptors(new PracticeInterceptor());
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
