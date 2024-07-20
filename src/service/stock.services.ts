import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { StockDocument } from '../schemas/stock.schema';

@Injectable()
export class StockService {
    constructor(
        private readonly stockModel: Model<StockDocument>
    ) {}

    async create(stock:StockDocument): Promise<StockDocument>{
        return this.stockModel.create(stock);
    }
    
    async insertMany(
        doc: Array<object>,
        options?: object,
    ): Promise<any>{
        return this.stockModel.insertMany(doc);
    }

    async find(
        filter : object,
        projection ?: object,
        options ?: object
    ): Promise<StockDocument[]>{
        return this.stockModel.find(filter, projection, options)
    }

    async findOne(
        filter ?: object,
        projection ?: object,
        options ?: object
    ) : Promise<StockDocument | null>{
        return this.stockModel.findOne(filter, projection, options)
    }

    async updateOne(
        filter ?: object,
        update ?: object,
        options ?: object
    ): Promise<any>{
        return this.stockModel.updateOne(filter,update, options)
    }

    async updateMany(
        filter ?: object,
        update ?: object,
        options ?: object
    ): Promise<any>{
        return this.stockModel.updateMany(filter,update, options)
    }

    async getStockDetails(name: string): Promise<any> {
        const filter = {
            'stockName': name
        }
        return this.findOne(filter)
    }

}
