import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockDocument, StockEntity } from '../schemas/stock.schema';

@Injectable()
export class StockService {
  constructor(
    @InjectModel(StockEntity.name) private readonly stockModel: Model<StockDocument>
  ) {}

  async create(stock: StockDocument): Promise<StockDocument> {
    try {
      return await this.stockModel.create(stock);
    } catch (error) {
      console.log("ERROR:", error)
      throw error;
    }
  }

  async insertMany(
    docs: Array<object>,
    options?: object,
  ): Promise<any> {
    try {
      return await this.stockModel.insertMany(docs, options);
    } catch (error) {
      console.log("ERROR:", error)
      throw error;
    }
  }

  async find(
    filter: object,
    projection?: object,
    options?: object
  ): Promise<StockDocument[]> {
    try {
      return await this.stockModel.find(filter, projection, options).exec();
    } catch (error) {
      console.log("ERROR:", error)
      throw error;
    }
  }

  async findOne(
    filter: object,
    projection?: object,
    options?: object
  ): Promise<StockDocument | null> {
    try {
      console.log(filter, projection, options)
      return await this.stockModel.findOne(filter, projection, options).exec();
    } catch (error) {
      console.log("ERROR:", error)
      throw error;
    }
  }

  async updateOne(
    filter: object,
    update: object,
    options?: object
  ): Promise<any> {
    try {
      return await this.stockModel.updateOne(filter, update, options).exec();
    } catch (error) {
      console.log("ERROR:", error)
      throw error;
    }
  }

  async updateMany(
    filter: object,
    update: object,
    options?: object
  ): Promise<any> {
    try {
      return await this.stockModel.updateMany(filter, update, options).exec();
    } catch (error) {
      console.log("ERROR:", error)
      throw error;
    }
  }

  async getStockDetails(name: string): Promise<StockDocument> {
    try {
      const filter = { stockName: name };
      return await this.findOne(filter);
    } catch (error) {
      console.log("ERROR:", error)
      throw error;
    }
  }

}
