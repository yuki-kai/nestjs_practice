import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PracticeModule } from './practice/practice.module';

@Module({
  imports: [PracticeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
