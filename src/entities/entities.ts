import { ApiProperty } from '@nestjs/swagger';

export class W1SensorResponse {
  @ApiProperty({ example: '28-000000000a5d', description: 'Sensor Name.' })
  sensor: string;

  @ApiProperty({ example: 23.01, description: 'Measured temperature in Celsius.' })
  temperature: number;
}

export class W1SensorResponseList {
  @ApiProperty({ isArray: true,  type: W1SensorResponse })
  sensors: W1SensorResponse[];
}


export class SCD30Response{
  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  co2Concentration: number;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  temperature: number;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  relativeHumidity: number;
}

// export class SCD30Response{
//   @ApiProperty({ example: 1, description: 'The age of the Cat' })
//   co2Concentration: number;

//   @ApiProperty({ example: 1, description: 'The age of the Cat' })
//   temperature: number;
// }
