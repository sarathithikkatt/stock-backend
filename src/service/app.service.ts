import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async getUserStocks() {
    const stocks = [
      {
        id: 1,
        name: "IRCTC",
        symbol: "IRCTC.BSE"
      },
      {
        id: 2,
        name: "IBM",
        symbol: "IBM"
      },
      {
        id: 3,
        name: "RELIANCE",
        symbol: "RELIANCE.BSE"
      },
      {
        id: 4,
        name: "HAL",
        symbol: "HAL.BSE"
      },
      {
        id: 5,
        name: "DLF",
        symbol: "DLF.BSE"
      },
    ];
    return stocks
  }

  async getStockDetail(name:string):Promise<any>{
    return name
  }
}
