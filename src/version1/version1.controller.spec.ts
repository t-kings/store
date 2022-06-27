import { Test, TestingModule } from '@nestjs/testing';
import { Version1Controller } from './version1.controller';
import { Version1Service } from './version1.service';

describe('Version1Controller', () => {
  let version1Controller: Version1Controller;

  beforeEach(async () => {
    const version1: TestingModule = await Test.createTestingModule({
      controllers: [Version1Controller],
      providers: [Version1Service],
    }).compile();

    version1Controller = version1.get<Version1Controller>(Version1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(version1Controller.getHello()).toBe('Hello World!');
    });
  });
});
