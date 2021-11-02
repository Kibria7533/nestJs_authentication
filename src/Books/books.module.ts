import { Module ,NestModule, MiddlewareConsumer} from "@nestjs/common";
import { LoggerMiddleware } from "src/logger.middlewrae";
import { booksController } from "./books.controller";
import { booksService } from "./books.service";


@Module({
    imports:[],
    providers:[booksService],
    controllers:[booksController]
})
export class booksModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes('book');
    }
  }