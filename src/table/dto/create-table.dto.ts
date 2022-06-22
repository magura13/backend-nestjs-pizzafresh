import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateTableDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    description: 'Number of table',
    example: 1,
  })
  number: number;
}
//* Classe criada para colocar os dados necessários para a criação da mesa!
//TODO - USANDO A BIBLIOTECA CLASS VALIDATOR PARA FAZER AS VALIDAÇÕES, IMPORTO OS DECORATORS @IsNumber() @IsPositive() QUE FARÃO AS VALIDAÇÕES DE ACORDO COM OS NOMES JÁ SUGEREM

//! SWAGGER => http://localhost:3333/api