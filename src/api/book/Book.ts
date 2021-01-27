import { ApiEntity } from '@spetushkou/expressjs';
import { Publisher } from '../publisher/Publisher';

export interface Book extends ApiEntity {
  name: string;
  publisher?: Publisher | string; // FK: Book MANY_TO_ONE Publisher
}
