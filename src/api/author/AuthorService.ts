import { Repository } from '@spetushkou/expressjs';
import { BaseApiCrudService } from '../../service/BaseApiCrudService';
import { AuthorEntity } from './AuthorEntity';

export class AuthorService extends BaseApiCrudService<AuthorEntity> {
  constructor(repository: Repository<AuthorEntity>) {
    super(repository);
  }
}
