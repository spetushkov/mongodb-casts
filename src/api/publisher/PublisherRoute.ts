import { BaseCrudRoute } from '@spetushkou/expressjs';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { PublisherController } from './PublisherController';
import { PublisherEntity } from './PublisherEntity';

export class PublisherRoute extends BaseCrudRoute<PublisherEntity> {
  private publisherController: PublisherController;

  constructor(controller: PublisherController) {
    super(controller);
    this.publisherController = controller;
    this.registerAdditionalRoutes();
  }

  getBaseUrl(): string {
    return '/publishers';
  }

  private registerAdditionalRoutes() {
    this.router.get(`${this.getBaseUrl()}/:id/books`, this.findBooksHandlers());
  }

  private findBooksHandlers = (): RequestHandler[] => [this.findBooks];

  private findBooks = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await this.publisherController.findBooks(req, res);
    } catch (error) {
      next(error);
    }
  };
}
