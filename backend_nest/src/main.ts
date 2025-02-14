import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/http-exception/http-exception.filter';
import { PracticeInterceptor } from './common/interceptors/practice/practice.interceptor';
import * as cookieParser from 'cookie-parser';
import * as fs from 'fs';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem'),
  };

  const app = await NestFactory.create(AppModule, {
    httpsOptions,
    cors: {
      "origin": ["https://localhost:3000"],
      "methods": "PUT,PATCH,DELETE",
      "preflightContinue": false,
      "optionsSuccessStatus": 204,
      "credentials": true,
      "allowedHeaders": ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cookie', 'Authorization'],
    }
  });

  app.use(cookieParser());
  app
    .useGlobalFilters(new HttpExceptionFilter())
    .useGlobalInterceptors(new PracticeInterceptor());
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
