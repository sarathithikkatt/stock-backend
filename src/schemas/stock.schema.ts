import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema({timestamps:true, versionKey:true})
export class StockEntity{
  @Prop({
    required: true,
    trim: true
  })
  stockName!: string;


  @Prop({
    required: true,
    trim: true
  })
  userId!: string;


  @Prop({
    type: [
      {
        date: { type: Date, required: true },
        price: { type: Number, required: true },
      },
    ],
    validate: {
      validator: function (v: Array<{ date: Date; price: number; }>) {
        return v.length <= 20;
      },
      message: 'History array length exceeds the limit of 20',
    },
  })
  history!: { date: Date; price: number; }[];
}

export const StockCollectionName = 'stock'
export const StockSchema = SchemaFactory.createForClass(StockEntity)
export type StockDocument = StockEntity & Document