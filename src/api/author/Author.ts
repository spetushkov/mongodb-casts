import { ApiEntity } from '@spetushkou/expressjs';
import { Book } from '../book/Book';

export interface Author extends ApiEntity {
  name: string;
  books?: Book[] | string[]; // FK: Book MANY_TO_ONE Author
}
