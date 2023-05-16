import sensor from 'ds18b20-raspi-typescript';

const ds18b20 = sensor;

let temperatures: Array<W1SensorResponse> = [];
const getTemperature = (): Promise<Array<W1SensorResponse>> => {
  return new Promise((resolve, reject) => {
    ds18b20.list().forEach((sensorId) => {
      const measuredTemperature = ds18b20.readC(sensorId, 2);
      console.log(measuredTemperature);
      if (measuredTemperature) {
        temperatures.push({
          sensor: sensorId,
          temperature: measuredTemperature
        });
      }
    });
    return resolve(temperatures);
  });
};

export default defineEventHandler(async () => {
  const data = await getTemperature();

  return {
    sensors: data
  };
});
