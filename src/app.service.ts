import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from NestJS!';
  }

  getTemperatures(): string {
    return 'There will be temperatures';
  }
}
