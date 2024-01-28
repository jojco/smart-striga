import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TempService } from './temp.service';
import { SCD30Service } from './scd30.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly tempService: TempService, private readonly scd30Service: SCD30Service) {}

  @Get('/w1')
  get1(): Promise<W1SensorResponse[]> {
    return this.tempService.getTemperatures();
  }

  @Get('/scd30')
  get2(): Promise<SCD30Mesurement> {
    return this.scd30Service.getTemperatures();
  }
}
