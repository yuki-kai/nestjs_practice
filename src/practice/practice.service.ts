import { Injectable } from '@nestjs/common';

@Injectable()
export class PracticeService {
  practice(): string {
    return 'success!';
  }
}
