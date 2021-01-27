import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { BaseApiEntity } from '../../entity/BaseApiEntity';
import { Publisher } from './Publisher';

export class PublisherEntity extends BaseApiEntity implements Publisher {
  @Expose()
  @IsString()
  @IsNotEmpty()
  name = '';

  getPrimaryKeys(): string[] {
    return [];
  }
}
