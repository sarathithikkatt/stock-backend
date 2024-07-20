import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('/stocks')
  async getStocks(): Promise<Record<string, any>> {
    return this.appService.getUserStocks();
  }

  @Get('/stock-info/:name')
  async getStockDetail(@Param() param:any){
    return this.appService.getStockDetail(param.name);
  }
}
