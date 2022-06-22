import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'Server is running! 🚀\n Please check http://localhost:3333/api for Swagger docs...';
  }
}
//* Como de práxe é quem provê o conteúdo e acessa o banco de dados, qualquer informação vem dele.
//todo - DIFERENTE DOS OUTROS ARQUÍVOS ESSE RECEBERÁ O DECORATOR @INJECTABLE. A IDEIA É QUE QUALQUER CLASSE QUE FORNEÇA UMA INFORMAÇÃO RECEBERÁ ESSE DECORATOR. 