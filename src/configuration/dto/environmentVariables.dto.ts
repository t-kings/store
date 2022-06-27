import { IsEnum, IsNumber } from 'class-validator';
import { ENVIRONMENT } from 'src/version1/interface';

export class EnvironmentVariables {
  @IsEnum(ENVIRONMENT)
  NODE_ENV: ENVIRONMENT;

  @IsNumber()
  PORT: number;
}
