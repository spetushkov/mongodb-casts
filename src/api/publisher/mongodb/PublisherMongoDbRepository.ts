import { BaseApiMongoDbRepository } from '../../../repository/mongodb/BaseApiMongoDbRepository';
import { PublisherEntity } from '../PublisherEntity';
import { PublisherModel } from './PublisherModel';

export class PublisherMongoDbRepository extends BaseApiMongoDbRepository<PublisherEntity> {
  constructor() {
    super(PublisherModel, PublisherEntity);
  }
}
