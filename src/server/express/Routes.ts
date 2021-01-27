import {
  BaseCrudController,
  BaseCrudService,
  Repository,
  RootRoute,
  Route,
  StaticFolderRegister,
  UndefinedRoute,
} from '@spetushkou/expressjs';
import { Application, Request, Response } from 'express';
import path from 'path';
import { AuthorController } from '../../api/author/AuthorController';
import { AuthorEntity } from '../../api/author/AuthorEntity';
import { AuthorRoute } from '../../api/author/AuthorRoute';
import { AuthorService } from '../../api/author/AuthorService';
import { AuthorMongoDbRepository } from '../../api/author/mongodb/AuthorMongoDbRepository';
import { BookController } from '../../api/book/BookController';
import { BookEntity } from '../../api/book/BookEntity';
import { BookRoute } from '../../api/book/BookRoute';
import { BookService } from '../../api/book/BookService';
import { BookMongoDbRepository } from '../../api/book/mongodb/BookMongoDbRepository';
import { PublisherMongoDbRepository } from '../../api/publisher/mongodb/PublisherMongoDbRepository';
import { PublisherController } from '../../api/publisher/PublisherController';
import { PublisherEntity } from '../../api/publisher/PublisherEntity';
import { PublisherRoute } from '../../api/publisher/PublisherRoute';
import { PublisherService } from '../../api/publisher/PublisherService';

export class Routes {
  private app: Application;

  private apiVersion: string;
  private baseUrl: string;
  private routes: Route[] = [];

  private bookRepository: Repository<BookEntity>;
  private bookService: BookService;
  private bookController: BaseCrudController<BookEntity>;
  private bookRoute: BookRoute;

  private publisherRepository: Repository<PublisherEntity>;
  private publisherService: BaseCrudService<PublisherEntity>;
  private publisherController: PublisherController;
  private publisherRoute: PublisherRoute;

  private authorRepository: Repository<AuthorEntity>;
  private authorService: BaseCrudService<AuthorEntity>;
  private authorController: BaseCrudController<AuthorEntity>;
  private authorRoute: AuthorRoute;

  constructor(app: Application) {
    this.app = app;
    this.apiVersion = process.env.API_VERSION || 'v1';
    this.baseUrl = `/${this.apiVersion}/api`;

    this.bookRepository = new BookMongoDbRepository();
    this.bookService = new BookService(this.bookRepository);
    this.bookController = new BookController(this.bookService);
    this.bookRoute = new BookRoute(this.bookController);
    this.register(this.bookRoute);

    this.publisherRepository = new PublisherMongoDbRepository();
    this.publisherService = new PublisherService(this.publisherRepository);
    this.publisherController = new PublisherController(this.publisherService, this.bookService);
    this.publisherRoute = new PublisherRoute(this.publisherController);
    this.register(this.publisherRoute);

    this.authorRepository = new AuthorMongoDbRepository();
    this.authorService = new AuthorService(this.authorRepository);
    this.authorController = new AuthorController(this.authorService);
    this.authorRoute = new AuthorRoute(this.authorController);
    this.register(this.authorRoute);
  }

  private register(route: Route) {
    this.routes.push(route);
  }

  connect(): void {
    this.routes.forEach((route) => this.app.use(`${this.baseUrl}`, route.registerRoutes()));
    this.registerProductionClientRoute();
    this.app.use(RootRoute.registerRoutes());
    this.app.use(UndefinedRoute);
  }

  registerProductionClientRoute = (): void => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }

    const clientBuildPath = process.env.CLIENT_BUILD_PATH || '/';
    this.app.use(StaticFolderRegister(`${clientBuildPath}`));

    this.app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(path.resolve(), clientBuildPath, 'index.html'));
    });
  };
}
