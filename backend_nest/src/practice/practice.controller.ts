import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { PracticeService } from './practice.service';
// import { CustomParseIntPipe } from '@/src/common/pipes/custom-parse-int/custom-parse-int.pipe';
import { AuthGuard } from '../common/guards/auth/auth.guard';
import { CustomParseIntPipe } from '../common/pipes/custom-parse-int/custom-parse-int.pipe';

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Get()
  practice(): string {
    return this.practiceService.practice();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  practiceDetail(@Param('id', CustomParseIntPipe) id: number): string {
    return this.practiceService.practiceDetail(id);
  }
}
