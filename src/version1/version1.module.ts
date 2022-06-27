import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { InterceptorModule } from './interceptors';
import { CartModule } from './routes/cart';
import { Version1Controller } from './version1.controller';
import { Version1Service } from './version1.service';

@Module({
  imports: [RouterModule, InterceptorModule, CartModule],
  controllers: [Version1Controller],
  providers: [Version1Service],
})
export class Version1Module {}
