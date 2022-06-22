import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateTableDto } from "./dto/create-table.dto";
import { TableService } from "./table.service";

@ApiTags('table')
@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {

  }

  @Get()
  findAll(){
    return this.tableService.findAll();
  }

  @Post()
  create(@Body() createTableDto: CreateTableDto) {
  return this.tableService.create(createTableDto)
  //*Passando como para da função o decorator @Body para ela poder receber as informações no corpo(body) da requisição > Chamo o createTableDto como o conteúdo desse body > Passo o createTableDto como parâmetro da função create
  }
}
