import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigurationService } from './configuration.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: ConfigurationService.validate,
    }),
  ],
  providers: [ConfigurationService],
})
export class ConfigurationModule {}
