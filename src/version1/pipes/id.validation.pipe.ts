import {
  Injectable,
  PipeTransform,
  HttpException,
  HttpStatus,
  ArgumentMetadata,
} from '@nestjs/common';
import mongoose from 'mongoose';
import { ResponseConstants } from 'src/version1/constants';

@Injectable()
export class IdValidationPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (metadata.type !== 'param') {
      return value;
    }
    const isValid = mongoose.Types.ObjectId.isValid(value);
    if (isValid) {
      return value;
    }
    throw new HttpException(
      {
        message: ResponseConstants.INVALID_ID,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
