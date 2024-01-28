import { Injectable } from '@nestjs/common';
import * as rpigpio from 'rpi-gpio';

@Injectable()
export class GPIOService {
    constructor() {
        rpigpio.setup(29, rpigpio.DIR_LOW);
        rpigpio.setup(31, rpigpio.DIR_LOW);
        rpigpio.setup(33, rpigpio.DIR_LOW);
        rpigpio.setup(36, rpigpio.DIR_LOW);
        rpigpio.setup(35, rpigpio.DIR_LOW);
        rpigpio.setup(38, rpigpio.DIR_LOW);
        rpigpio.setup(40, rpigpio.DIR_LOW);
        rpigpio.setup(37, rpigpio.DIR_LOW);
    }

    async enableGPIO(pin: number, on: boolean) {
        rpigpio.write(pin, on);
    }
}
