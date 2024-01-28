import { Injectable } from '@nestjs/common';
import { SCD30 } from 'scd30-node';
import { SCD30Response } from './entities/entities';

@Injectable()
export class SCD30Service {
    getHello(): string {
        return 'Hello from SCD30Service!';
    }

    async getTemperatures(maxRetries: number = 3): Promise<SCD30Response | undefined> {
        let retries = 0;
        while (retries < maxRetries) {
            const scd30 = await SCD30.connect();
            const dataReady = await scd30.isDataReady();
            if (dataReady) {
                const measurement: SCD30Response = await scd30.readMeasurement();
                scd30.disconnect();

                return {
                    co2Concentration: measurement.co2Concentration,
                    temperature: measurement.temperature,
                    relativeHumidity: measurement.relativeHumidity
                };
            } else {
                retries++;
                console.log('Data not ready. Retrying...');
                await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 1 second before retrying
            }
        }
        console.log('Max retries exceeded. Data not available.');
        return undefined;
    }
    
}



