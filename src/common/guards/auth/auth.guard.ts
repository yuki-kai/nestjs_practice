import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('--- Guard Start ---');
    const request = context.switchToHttp().getRequest();
    let apiKey = request.headers.authorization || '';
    if (apiKey.startsWith('Bearer ')) {
      apiKey = apiKey.slice(7);
    } else {
      return false
    }
    return apiKey === 'test_token';
  }
}
