import { BaseRequest, CrudService, StatusCode } from '@spetushkou/expressjs';
import { Response } from 'express';
import { BaseApiCrudController } from '../../controller/BaseApiCrudController';
import { BookService } from '../book/BookService';
import { PublisherEntity } from './PublisherEntity';

export class PublisherController extends BaseApiCrudController<PublisherEntity> {
  private bookService: BookService;
  constructor(service: CrudService<PublisherEntity>, bookService: BookService) {
    super(service, PublisherEntity);
    this.bookService = bookService;
  }

  async findBooks(req: BaseRequest, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const result = await this.bookService.findAllByPublisherId(id);
      res.status(StatusCode.OK).json(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
