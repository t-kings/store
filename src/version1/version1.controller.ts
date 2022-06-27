import { Controller, Get } from '@nestjs/common';
import { Version1Service } from './version1.service';

@Controller({
  version: '1',
})
export class Version1Controller {
  constructor(private readonly version1Service: Version1Service) {}

  @Get()
  getHello(): string {
    return this.version1Service.getHello();
  }
}
