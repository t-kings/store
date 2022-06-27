import { STATUS } from './enums';

export interface Meta {
  pagination: any;
}

export interface ResponseSchema<T> {
  status: STATUS;
  message: string;
  data: T;
  meta: Meta;
}
