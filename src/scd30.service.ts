import { Injectable } from '@nestjs/common';
import { SCD30 } from 'scd30-node';


@Injectable()
export class SCD30Service {
    getHello(): string {
        return 'Hello from SCD30Service!';
    }

    async getTemperatures(): Promise<SCD30Mesurement> {
        const scd30 = await SCD30.connect();
        const measurement: SCD30Mesurement = await scd30.readMeasurement();
        // scd30.startContinuousMeasurement().then((res) => {
        //   console.log('start', res);
        // });
        // console.log(`CO2 Concentration: ${measurement.co2Concentration} ppm`);
        // console.log(`Temperature: ${measurement.temperature} °C`);
        // console.log(`Humidity: ${measurement.relativeHumidity} %`);
        // await scd30.stopContinuousMeasurement();
        return {
            co2Concentration: measurement.co2Concentration | 0,
            temperature: measurement.temperature | 0,
            relativeHumidity: measurement.relativeHumidity | 0
        };
  }
}



