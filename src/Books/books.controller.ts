import { Body, Controller ,Get, Param, Post, ValidationPipe} from "@nestjs/common";
import { booksService } from "./books.service";
import { createDto } from "./dtos/create.dto";
@Controller('book')
export class booksController{
    constructor(private readonly bookService:booksService){}

  @Get('/gethet')
  getBook(@Param() id:string):string{
      console.log(id,'id here')
      return this.bookService.getBook();
  }


  @Post('/save')
  saveBook(@Body() body:createDto){
    return  this.bookService.saveBook(body);
  }

}