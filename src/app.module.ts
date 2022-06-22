import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableModule } from './table/table.module';

@Module({
  imports: [TableModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//* O module recebe todas as classes do projeto e funciona como uma cola unindo tudo o que é necessário para a aplicação funcionar. Ele utiliza o decorator @module para definir que a classe trabalhe como um módulo