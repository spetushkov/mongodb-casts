import { CrudService } from '@spetushkou/expressjs';
import { BaseApiCrudController } from '../../controller/BaseApiCrudController';
import { AuthorEntity } from './AuthorEntity';

export class AuthorController extends BaseApiCrudController<AuthorEntity> {
  constructor(service: CrudService<AuthorEntity>) {
    super(service, AuthorEntity);
  }
}
