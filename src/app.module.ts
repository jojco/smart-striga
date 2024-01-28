import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TempService } from './temp.service';
import { SCD30Service } from './scd30.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TempService, SCD30Service],
})
export class AppModule {}
