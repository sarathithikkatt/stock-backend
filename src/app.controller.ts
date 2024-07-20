import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/stocks')
  getStock(){
    const stocks = [
      {
        id: 1,
        name: "Apple Inc.",
        ticker: "AAPL",
        price: 145.32,
        change: 2.5,
        changePercentage: 1.75,
      },
      {
        id: 2,
        name: "Microsoft Corporation",
        ticker: "MSFT",
        price: 280.15,
        change: -1.2,
        changePercentage: -0.43,
      },
      {
        id: 3,
        name: "Amazon.com, Inc.",
        ticker: "AMZN",
        price: 3215.75,
        change: 5.3,
        changePercentage: 0.17,
      },
      {
        id: 4,
        name: "Tesla, Inc.",
        ticker: "TSLA",
        price: 700.12,
        change: -10.5,
        changePercentage: -1.48,
      },
      {
        id: 5,
        name: "Nvidia Corporation",
        ticker: "NVDA",
        price: 615.43,
        change: 8.2,
        changePercentage: 1.35,
      },
      {
        id: 6,
        name: "Alphabet Inc. (Class C)",
        ticker: "GOOG",
        price: 2450.21,
        change: -3.1,
        changePercentage: -0.13,
      },
      {
        id: 7,
        name: "Johnson & Johnson",
        ticker: "JNJ",
        price: 165.87,
        change: 1.5,
        changePercentage: 0.91,
      },
      {
        id: 8,
        name: "Procter & Gamble Co.",
        ticker: "PG",
        price: 135.24,
        change: -0.8,
        changePercentage: -0.59,
      },
      {
        id: 9,
        name: "Visa Inc. (Class A)",
        ticker: "V",
        price: 220.15,
        change: 2.3,
        changePercentage: 1.06,
      },
      {
        id: 10,
        name: "Walmart Inc.",
        ticker: "WMT",
        price: 145.32,
        change: -1.1,
        changePercentage: -0.75,
      },
      {
        id: 11,
        name: "JPMorgan Chase & Co.",
        ticker: "JPM",
        price: 155.43,
        change: 3.2,
        changePercentage: 2.11,
      },
      {
        id: 12,
        name: "Exxon Mobil Corporation",
        ticker: "XOM",
        price: 58.27,
        change: -0.5,
        changePercentage: -0.85,
      },
      {
        id: 13,
        name: "The Coca-Cola Company",
        ticker: "KO",
        price: 54.12,
        change: 0.8,
        changePercentage: 1.5,
      },
      {
        id: 14,
        name: "Pfizer Inc.",
        ticker: "PFE",
        price: 39.87,
        change: -0.3,
        changePercentage: -0.75,
      },
      {
        id: 15,
        name: "The Walt Disney Company",
        ticker: "DIS",
        price: 185.43,
        change: 1.5,
        changePercentage: 0.81,
      },
      {
        id: 16,
        name: "Mastercard Incorporated (Class A)",
        ticker: "MA",
        price: 365.21,
        change: 4.2,
        changePercentage: 1.16,
      },
      {
        id: 17,
        name: "Verizon Communications Inc.",
        ticker: "VZ",
        price: 55.87,
        change: -0.6,
        changePercentage: -1.06,
      },
      {
        id: 18,
        name: "The Home Depot, Inc.",
        ticker: "HD",
        price: 315.43,
        change: 2.1,
        changePercentage: 0.67,
      },
      {
        id: 19,
        name: "Chevron Corporation",
        ticker: "CVX",
        price: 105.21,
        change: -1.2,
        changePercentage: -1.13,
      },
      {
        id: 20,
        name: "The Boeing Company",
        ticker: "BA",
        price: 215.43,
        change: 3.5,
        changePercentage: 1.65,
      },
    ];
    return stocks
  }
}
