import { BaseApiMongoDbRepository } from '../../../repository/mongodb/BaseApiMongoDbRepository';
import { AuthorEntity } from '../AuthorEntity';
import { AuthorModel } from './AuthorModel';

export class AuthorMongoDbRepository extends BaseApiMongoDbRepository<AuthorEntity> {
  constructor() {
    super(AuthorModel, AuthorEntity);
  }
}
