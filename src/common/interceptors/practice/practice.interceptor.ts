import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class PracticeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('--- Interceptor Start ---');
    return next.handle().pipe(
      tap(() => {
        console.log('--- Interceptor End ---');
      }),
      catchError((error) => {
        console.log('--- Interceptor Error ---');
        return throwError(() => new HttpException(error.message, HttpStatus.BAD_REQUEST));
      })
    );
  }
}

