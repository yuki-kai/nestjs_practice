import { Injectable } from '@nestjs/common';

@Injectable()
export class PracticeService {
  practice(): string {
    return 'success!';
  }

  practiceDetail(id: number): string {
    return `${id} id success!`;
  }

  getTime(): string {
    return (new Date()).toLocaleTimeString();
  }
}
