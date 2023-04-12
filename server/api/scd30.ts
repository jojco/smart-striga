import { SCD30 } from 'scd30-node';

export default defineEventHandler(async () => {
  const scd30 = await SCD30.connect();
  await scd30.startContinuousMeasurement().then((res) => {console.log('start',res)})
  const measurement = await scd30.readMeasurement();

  console.log(`CO2 Concentration: ${measurement.co2Concentration} ppm`);
  console.log(`Temperature: ${measurement.temperature} °C`);
  console.log(`Humidity: ${measurement.relativeHumidity} %`);

  // await scd30.stopContinuousMeasurement();

  return {
    co2Concentration: measurement.co2Concentration,
    temperature: measurement.temperature,
    relativeHumidity: measurement.relativeHumidity
  };
});
