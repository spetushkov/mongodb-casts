import { BaseApiMongoDbRepository } from '../../../repository/mongodb/BaseApiMongoDbRepository';
import { BookEntity } from '../BookEntity';
import { BookModel } from './BookModel';

export class BookMongoDbRepository extends BaseApiMongoDbRepository<BookEntity> {
  constructor() {
    super(BookModel, BookEntity);
  }
}
