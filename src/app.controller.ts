import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { TempService } from './temp.service';
import { SCD30Service } from './scd30.service';
import { GPIOService } from './gpio.service';
import { SetGPIODto } from './dto/gpio.dto'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SCD30Response, W1SensorResponseList } from './entities/entities';
import { off } from 'process';

@ApiTags('App controler')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly tempService: TempService, private readonly scd30Service: SCD30Service, private readonly gpioService: GPIOService) { }


  @Get('/w1')
  @ApiResponse({
    status: 200,
    description: 'Temperature in Celsius.',
    type: [W1SensorResponseList],
  })
  w1(): Promise<W1SensorResponseList | undefined> {
    return this.tempService.getTemperatures();
  }

  @Get('/scd30')
  @ApiResponse({
    status: 200,
    description: 'Temperature in Celsius.',
    type: SCD30Response,
  })
  scd30(): Promise<SCD30Response | undefined> {
    return this.scd30Service.getTemperatures();
  }

  // @Post()
  // async create(@Body() setGPIO: SetGPIODto) {
  //   console.log(setGPIO)
  // }

  @Put('/gpio/:pin/:on')
  gpio(@Param('pin') pin: number, @Param('on') on: 'on' | 'off') {
    const isOn: boolean = on === 'on'; // Convert string to boolean
    return this.gpioService.enableGPIO(pin, isOn);
  }
}
