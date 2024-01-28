import { Injectable } from '@nestjs/common';
import * as ds18b20 from 'ds18b20-raspi-typescript';


@Injectable()
export class TempService {
  async getTemperatures(): Promise<W1SensorResponse[]> {
    let sensors: string[] = ds18b20.list()

    const promises: Promise<W1SensorResponse>[] = [];

    // Create an array of promises for each sensor reading
    sensors.forEach((sensorId) => {
      promises.push(
        new Promise(async (resolve) => {
          const tmp = ds18b20.readC(sensorId, 2);
          if (tmp) {
            resolve({
              sensor: sensorId,
              temperature: tmp
            });
          } else {
            resolve(undefined); // Resolve with undefined if temperature reading failed
          }
        })
      );
    });

    // Wait for all promises to resolve
    const results = await Promise.all(promises);

    // Filter out undefined results and return the temperatures
    const temperatures = results.filter((result) => result !== undefined) as W1SensorResponse[];

    console.log('temp: ', results);
    
    return temperatures;
  }
}
