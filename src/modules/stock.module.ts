import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockCollectionName, StockEntity, StockSchema} from '../schemas/stock.schema';
import { StockService } from '../service/stock.services';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: StockEntity.name,
        schema: StockSchema,
        collection: StockCollectionName,
      },
    ]),
  ],
  providers: [StockService],
  exports: [StockService],
  controllers: []
})
export class StockModule {}
