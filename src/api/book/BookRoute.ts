import { BaseCrudController, BaseCrudRoute } from '@spetushkou/expressjs';
import { BookEntity } from './BookEntity';

export class BookRoute extends BaseCrudRoute<BookEntity> {
  constructor(constroller: BaseCrudController<BookEntity>) {
    super(constroller);
  }

  getBaseUrl(): string {
    return '/books';
  }
}
