import { Module } from '@nestjs/common';
import { AppService } from '../service/app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { JobService } from '../job.service';
import { AppController } from '../controller/app.controller';
import { StockModule } from './stock.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ScheduleModule.forRoot(),
    StockModule,
  ],
  controllers: [AppController],
  providers: [AppService, JobService],
})
export class AppModule {}
