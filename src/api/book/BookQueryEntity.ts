import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class BookQueryEntity {
  @Expose()
  @IsOptional()
  publisher?: string;
}
