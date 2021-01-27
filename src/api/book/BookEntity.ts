import { Expose, Type } from 'class-transformer';
import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { BaseApiEntity } from '../../entity/BaseApiEntity';
import { PublisherEntity } from '../publisher/PublisherEntity';
import { Book } from './Book';

export class BookEntity extends BaseApiEntity implements Book {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name = '';

  @Expose()
  @Type(() => PublisherEntity)
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  publisher?: PublisherEntity | string;

  getPrimaryKeys(): string[] {
    return [];
  }
}
