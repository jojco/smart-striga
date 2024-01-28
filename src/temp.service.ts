import { Injectable } from '@nestjs/common';
import * as ds18b20 from 'ds18b20-raspi-typescript';
import { W1SensorResponse, W1SensorResponseList } from './entities/entities';

@Injectable()
export class TempService {
  async getTemperatures(): Promise<W1SensorResponseList> {
    const sensors: string[] = ds18b20.list();

    const temperatures: W1SensorResponse[] = await Promise.all(
      sensors.map(async (sensorId) => {
        const temperature = ds18b20.readC(sensorId, 2);
        if (temperature !== undefined) {
          return { sensor: sensorId, temperature };
        }
        return undefined;
      })
    );

    const filteredTemperatures = temperatures.filter(Boolean) as W1SensorResponse[];

    const listResponse = new W1SensorResponseList();
    listResponse.sensors = []
    listResponse.sensors.push(...filteredTemperatures);

    console.log('temp: ', filteredTemperatures);
    
    return listResponse;
  }
}
