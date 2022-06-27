import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app';
import { ConfigurationService } from './configuration';

async function bootstrap() {
  const server = await NestFactory.create(AppModule);

  server.enableVersioning({
    type: VersioningType.URI,
  });

  const configurationService = server.get(ConfigurationService);
  const port = configurationService.port;
  await server.listen(port);
}
bootstrap();
