import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { STOCK_NAMES } from './utils/constants/stock-name.constants';
import axios from 'axios';
import { StockService } from './service/stock.services';
import { StockDocument, StockEntity } from './schemas/stock.schema';
import { response } from 'express';


@Injectable()
export class JobService {
    constructor (
        private readonly stockService: StockService
    ) {}

    @Cron(CronExpression.EVERY_10_SECONDS)
    async handleCron() {
        const stock_names = STOCK_NAMES
        for (const stock_name of stock_names) {
            const apiUrl = `${process.env.STOCK_API_URL}query?function=TIME_SERIES_INTRADAY&symbol=${stock_name.symbol}&interval=5min&apikey=${process.env.STOCK_API_KEY}&adjusted=false`;                
      try {
        const response = await axios.get(apiUrl);
        console.log(response)
        await this.processStockData(response.data, "1");
      } catch (error) {
        console.log(`Error fetching or processing data for ${stock_name.symbol}: ${error.message}`);
      }
          }
    }

    async processStockData(apiResponse: any, userId: string): Promise<void> {
        const { 'Meta Data': metaData, 'Time Series (5min)': timeSeries } = apiResponse;
    
        const symbol = metaData['2. Symbol'];
        const timeSeriesEntries = Object.entries(timeSeries);
    
        // Get the latest 20 entries
        const latest20Entries = timeSeriesEntries.slice(0, 20).reverse();
    
        const history = latest20Entries.map(([timestamp, data]) => ({
          timestamp: timestamp,
          open: parseFloat(data['1. open']),
          high: parseFloat(data['2. high']),
          low: parseFloat(data['3. low']),
          close: parseFloat(data['4. close']),
          volume: parseInt(data['5. volume'], 10),
        }));
    
        const formattedData :StockEntity= {
          stockName: symbol,
          userId: userId,
          history: history,
        };
    
        try {
          await this.stockService.create(formattedData);
          console.log(`Successfully saved data for ${symbol}`);
        } catch (error) {
          console.log(`Error saving data for ${symbol}: ${error.message}`);
        }
      }
}
