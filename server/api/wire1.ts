import sensor from 'ds18b20-raspi-typescript';

const ds18b20 = sensor;

const getTemperature = (): Promise<Array<W1SensorResponse>> => {
  return new Promise((resolve, reject) => {
    let temperatures: Array<W1SensorResponse> = [];
    ds18b20.list().forEach((sensorId) => {
      const tmp = ds18b20.readC(sensorId, 2);
      if (tmp) {
        temperatures.push({
          sensor: sensorId,
          temperature: tmp
        });
      }
    });
    console.log('temp: ', temperatures);
    resolve(temperatures);
  });
};

export default defineEventHandler(async () => {
  const data = await getTemperature();
  
  return {
    sensors: data
  };
});
