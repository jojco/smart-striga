import ds18b20 from 'ds18b20';

interface W1SensorResponse {
  sensor: string;
  temperature: number;
}

const getTemperature = (sensor: string): Promise<W1SensorResponse> => {
  return new Promise((resolve, reject) => {
    ds18b20.temperature(sensor, { parser: 'hex' }, function (err, value) {
      if (err) {
        reject(err);
      } else {
        const response: W1SensorResponse = {} as W1SensorResponse;
        response.sensor = sensor;
        response.temperature = value;
        console.log('Current temperature is:', response);
        resolve(response);
      }
    });
  });
};

let temperatures: Array<W1SensorResponse> = [];
ds18b20.sensors((err, sensors) => {
  // console.error('Error: ', err);
  sensors.forEach((sensor: string) => {
    const temperature = getTemperature(sensor);
    temperature.then((result) => {
      temperatures.push(result);
    });
  });
});

export default defineEventHandler(async (event) => {
  return {
    sensors: temperatures
  };
});
