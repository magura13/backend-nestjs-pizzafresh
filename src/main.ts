import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
  .setTitle('PizzaFresh')
  .setDescription('Aplication for management of a restaurant')
  .setVersion('1.0.0')
  .addTag('status')
  .addTag('table')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();

//* O arquivo main.ts é o coração do projeto, nele temos uma função de bootstrap que inicia o app aplicando o AppModule e utiliza o método listen igual ao express para defirnir a porta onde a aplicação será executada
