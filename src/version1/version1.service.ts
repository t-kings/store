import { Injectable } from '@nestjs/common';

@Injectable()
export class Version1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
