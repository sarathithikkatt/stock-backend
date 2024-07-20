import { Injectable, NotFoundException } from '@nestjs/common';
import { StockService } from './stock.services';
import { STOCK_NAMES } from '../utils/constants/stock-name.constants';

@Injectable()
export class AppService {
  constructor(
    private readonly stockService : StockService
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async getUserStocks() {
    return STOCK_NAMES
  }

  async getStockDetail(name:string):Promise<any>{
    const stock = await this.stockService.getStockDetails(name)
    if (!stock) {
      throw new NotFoundException(`Stock with name ${name} not found`);
    }
    return stock;
  }
}
