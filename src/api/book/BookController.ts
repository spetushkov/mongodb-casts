import { CrudService } from '@spetushkou/expressjs';
import { ClassTransformer } from '../../class/ClassTransformer';
import { BaseApiCrudController } from '../../controller/BaseApiCrudController';
import { BookEntity } from './BookEntity';
import { BookQueryEntity } from './BookQueryEntity';

export class BookController extends BaseApiCrudController<BookEntity> {
  constructor(service: CrudService<BookEntity>) {
    super(service, BookEntity);
  }

  protected normalizeRequestQueryParams(query: Object | null): Partial<BookEntity> {
    return ClassTransformer.fromPlain(BookQueryEntity, query);
  }
}
