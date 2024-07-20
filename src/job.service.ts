import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { STOCK_NAMES } from './utils/constants/stock-name.constants';
import axios from 'axios';
import { StockService } from './service/stock.services';


@Injectable()
export class JobService {
    constructor (
        private readonly stockService: StockService
    ) {}

    @Cron(CronExpression.EVERY_5_MINUTES)
    async fettchCoinDetail() {
        for (const stockName of STOCK_NAMES) {
            const url = 'https://api.livecoinwatch.com/coins/single';
            const headers = {
              'content-type': 'application/json',
              'x-api-key': process.env.STOCK_API_KEY,
            };
            const data = {
              currency: "INR",
              code: stockName.symbol,
              meta: false,
            };
            try {
                const response = await axios.post(url, data, { headers });
                const stockData = response.data;
        
                if (stockData) {
                  const newEntry = {
                    timestamp: new Date(),
                    rate: stockData.rate,
                  };
                    const existingStock = await this.stockService.findOne({ stockName: stockName.name });
                  if (existingStock) {
                    const updatedHistory = [newEntry, ...existingStock.history].slice(0, 20);
                    await this.stockService.updateOne(
                      { stockName: stockName.name },
                      { $set: { history: updatedHistory } }
                    );
                  } else {
                    await this.stockService.create({
                      userId: "1",
                      stockName: stockName.name,
                      history: [newEntry],
                    });
                  }
                }
              }  catch (error) {
              console.error(`Error fetching data for ${stockName}:`, error);
            }
          }
          console.log("FETCH COIN DETAIL JOB DONE");
        }
    }

