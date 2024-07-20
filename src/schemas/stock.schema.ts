import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps:true})
export class StockEntity{
  @Prop({
    required: true,
    trim: true
  })
  stockName: string;


  @Prop({
    required: true,
    trim: true
  })
  userId: string;


  @Prop({
    type: [
      {
        timestamp: { type: String, required: true },
        open: { type: Number, required: true },
        high: { type: Number, required: true },
        low: { type: Number, required: true },
        close: { type: Number, required: true },
        volume: { type: Number, required: true },
      },
    ],
    validate: {
      validator: function (v: Array<{ timestamp: Date; open: number; high: number; low: number; close: number; volume: number }>) {
        return v.length <= 20;
      },
      message: 'History array length exceeds the limit of 20',
    },
  })
  history?: { 
    timestamp: string; 
    open: number; 
    high: number; 
    low: number; 
    close: number; 
    volume: number 
  }[];
}

export const StockCollectionName = 'stocks'
export const StockSchema = SchemaFactory.createForClass(StockEntity)
export type StockDocument = StockEntity & Document