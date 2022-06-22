import { Injectable } from '@nestjs/common'; //* Decorator que normalmente é usado em classes que forneçam informações
import { CreateTableDto } from './dto/create-table.dto'; //* DTO(Data Transfer Object) é basicamente um objeto simples usado para transferir dados de um local a outro na aplicação
//* O CreateTableDto é a classe que coloquei os dados necessários para criação da mesa
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  findAll() {
    return this.tables;
  }

  create(createTableDto: CreateTableDto) {
    const table: Table = { id: 'random id', ...createTableDto };

    this.tables.push(table);

    return table;
  }
}
