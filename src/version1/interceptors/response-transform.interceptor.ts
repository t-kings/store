import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { STATUS, ResponseSchema } from 'src/version1/interface';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseTransformerInterceptor<T>
  implements NestInterceptor<T, Promise<ResponseSchema<T>>>
{
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<Promise<ResponseSchema<T>>>> {
    return next.handle().pipe(
      map(async (response) => {
        return {
          status: STATUS.SUCCESS,
          data: response.data,
          meta: response.meta,
          message: response.message,
        };
      }),
    );
  }
}
