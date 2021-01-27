import { BaseCrudController, BaseCrudRoute } from '@spetushkou/expressjs';
import { AuthorEntity } from './AuthorEntity';

export class AuthorRoute extends BaseCrudRoute<AuthorEntity> {
  constructor(constroller: BaseCrudController<AuthorEntity>) {
    super(constroller);
  }

  getBaseUrl(): string {
    return '/authors';
  }
}
