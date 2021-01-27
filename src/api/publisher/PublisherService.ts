import { Repository } from '@spetushkou/expressjs';
import { BaseApiCrudService } from '../../service/BaseApiCrudService';
import { PublisherEntity } from './PublisherEntity';

export class PublisherService extends BaseApiCrudService<PublisherEntity> {
  constructor(repository: Repository<PublisherEntity>) {
    super(repository);
  }
}
