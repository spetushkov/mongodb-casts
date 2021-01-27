import { PageRequest, PageResult, Repository } from '@spetushkou/expressjs';
import { BaseApiCrudService } from '../../service/BaseApiCrudService';
import { BookEntity } from './BookEntity';
import { BookQueryEntity } from './BookQueryEntity';

export class BookService extends BaseApiCrudService<BookEntity> {
  constructor(repository: Repository<BookEntity>) {
    super(repository);
  }

  async findAllByPublisherId(publisherId: string): Promise<PageResult<BookEntity>> {
    try {
      const bookQueryEntity: BookQueryEntity = {
        publisher: publisherId,
      };
      const pageRequest: PageRequest = new PageRequest(bookQueryEntity);
      return this.findAll(pageRequest);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
