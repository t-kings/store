import { Module } from '@nestjs/common';
import { CartModule } from './cart';
import { ProductModule } from './product';

@Module({
  imports: [ProductModule, CartModule],
})
export class RoutesModule {}
