import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ExceptionInterceptor } from './exception.interceptor';
import { ResponseTransformerInterceptor } from './response-transform.interceptor';

@Module({
  providers: [
    {
      provide: APP_FILTER,
      useClass: ExceptionInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: ResponseTransformerInterceptor,
    },
  ],
})
export class InterceptorModule {}
