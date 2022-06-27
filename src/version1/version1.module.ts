import { Module } from '@nestjs/common';
import { InterceptorModule } from './interceptors';
import { RoutesModule } from './routes';
import { CartModule } from './routes/cart';
import { Version1Controller } from './version1.controller';
import { Version1Service } from './version1.service';

@Module({
  imports: [RoutesModule, InterceptorModule, CartModule],
  controllers: [Version1Controller],
  providers: [Version1Service],
})
export class Version1Module {}
