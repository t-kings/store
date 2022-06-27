import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Version1Module } from './version1';

@Module({
  imports: [Version1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
