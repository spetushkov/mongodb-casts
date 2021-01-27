import { Expose, Type } from 'class-transformer';
import {
  ArrayNotEmpty,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseApiEntity } from '../../entity/BaseApiEntity';
import { BookEntity } from '../book/BookEntity';
import { Author } from './Author';

export class AuthorEntity extends BaseApiEntity implements Author {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name = '';

  @Expose()
  @Type(() => BookEntity)
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsMongoId({ each: true })
  books?: BookEntity[] | string[];

  getPrimaryKeys(): string[] {
    return [];
  }
}
