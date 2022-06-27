import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  HttpException,
  BadGatewayException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { STATUS } from 'src/version1/interface';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err: any) => {
        if (err.response) {
          throw new HttpException(
            { ...err.response, status: STATUS.ERROR },
            err.status,
          );
        }

        throw new BadGatewayException();
      }),
    );
  }
}
