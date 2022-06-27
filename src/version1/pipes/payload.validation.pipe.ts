import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ResponseConstants } from 'src/version1/constants';

type MeTaType = ArgumentMetadata['metatype'];

@Injectable()
export class PayloadValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype, type }: ArgumentMetadata) {
    if (type !== 'body') {
      return value;
    }
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(ResponseConstants.VALIDATION_FAILED);
    }
    return value;
  }

  private toValidate(metatype: MeTaType): boolean {
    const types: MeTaType[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
