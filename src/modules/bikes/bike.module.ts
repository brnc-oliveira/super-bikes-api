import { Module } from '@nestjs/common';
import { bikeController } from './routes/controller/bike.controller';

@Module({
  imports: [],
  providers: [],
  controllers: [...bikeController],
})
export default class BikeModule {}
