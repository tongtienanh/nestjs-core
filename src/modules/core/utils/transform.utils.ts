import { BadRequestException } from '@nestjs/common';
import { isNumber } from 'class-validator';
import * as dayjs from 'dayjs';

export class TransformUtils {
  static parseNumber({ value }): number {
    value = value && +value;
    if (isNaN(value) || value === '') return null;

    return value;
  }

  static trimValue({ value }): string {
    return value && value.toString().trim();
  }

  static parseNumberArray({ value }) {
    if (Array.isArray(value) && value.length > 0) {
      return value.filter((item) => isNumber(+item)).map((item) => +item);
    }
    return !Array.isArray(value) && !Number.isNaN(+value) ? [+value] : value;
  }

  static parseString({ value }): string {
    return value && value.toString().replace(/  +/g, ' ').trim();
  }

  static parseBoolean({ value }): boolean {
    return typeof value === 'string' && (value === 'true' || value === '1');
  }
}
