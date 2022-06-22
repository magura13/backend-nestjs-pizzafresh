import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('status')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
//* Os controllers como de práxe são responsáveis pelo request e response do cliente. Recebe o decorator @controller e nele estarão presentes os métodos HTTP (Get, Post, Update(patch, put), Create, Delete)