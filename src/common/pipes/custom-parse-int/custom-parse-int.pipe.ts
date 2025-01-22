import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class CustomParseIntPipe implements PipeTransform<string, number> {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!Number.isInteger(parseInt(value))) {
      throw new HttpException("id is invalid", HttpStatus.BAD_REQUEST);
    }
    return value;
  }
}
