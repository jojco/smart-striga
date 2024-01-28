import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TempService } from './temp.service';
import { SCD30Service } from './scd30.service';
import { GPIOService } from './gpio.service';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SCD30Response, W1SensorResponseList } from './entities/entities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly tempService: TempService, private readonly scd30Service: SCD30Service, private readonly gpioService: GPIOService) { }


  @Get('/w1')
  @ApiResponse({
    status: 200,
    description: 'Temperature in Celsius.',
    type: [W1SensorResponseList],
  })
  get1(): Promise<W1SensorResponseList | undefined> {
    return this.tempService.getTemperatures();
  }

  @Get('/scd30')
  @ApiResponse({
    status: 200,
    description: 'Temperature in Celsius.',
    type: SCD30Response,
  })
  get2(): Promise<SCD30Response | undefined> {
    return this.scd30Service.getTemperatures();
  }

  @Post('/gpio')
  get3() {
    return this.gpioService.setG()
  }
  @Post('/gpio2')
  get4() {
    return this.gpioService.setD()
  }
}
