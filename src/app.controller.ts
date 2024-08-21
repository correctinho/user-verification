import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @EventPattern('user-details')
  // userDetails(data: any) {
  //   console.log('recebendo mensagem');
  //   console.log(data);
  // }
}
