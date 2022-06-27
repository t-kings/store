import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Version1Module } from '../version1';
import { ConfigurationModule } from 'src/configuration';

@Module({
  imports: [Version1Module, ConfigurationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
