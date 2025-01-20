import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PracticeModule } from './practice/practice.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { PracticeController } from './practice/practice.controller';

@Module({
  imports: [PracticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(PracticeController);
  }
}
