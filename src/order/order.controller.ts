import { Controller, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {

    @Get()
    getAll() {
        return "thanh";
    }
}
