import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, NestInterceptor } from '@nestjs/common';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

export const Info = {
  statusCode: 200,
  message: 'success'
}

/**
* export type 型エイリアスのexport
* オブジェクトの値のユニオン型を作成
* typeof xxx &  型定義をマージして返却
*/
export type Response<T> = typeof Info & {
  data: T
}

@Injectable()
export class PracticeInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('--- Interceptor Start ---');
    return next.handle().pipe(
      map(data => {
        console.log('--- Interceptor End ---');
        console.log(data);
        return Object.assign({}, Info, {data})
      }),
      catchError((error) => {
        console.log('--- Interceptor Error ---');
        console.log(error);
        return throwError(() => new HttpException(error.message, HttpStatus.BAD_REQUEST));
      })
    );
  }
}

