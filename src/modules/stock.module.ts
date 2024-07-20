import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { StockCollectionName, StockEntity, StockSchema } from "../schemas/stock.schema";
import { StockService } from "../service/stock.services";

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                schema: StockSchema,
                name: StockEntity.name,
                collection: StockCollectionName
            }
        ],
    )
    ],
    exports: [StockService],
    providers: [StockService],
})

export class StockModule {}