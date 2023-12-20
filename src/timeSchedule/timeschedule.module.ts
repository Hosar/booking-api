/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TimeScheduleResolver } from './timeSchedule.resolver';
import { TimeScheduleService } from './timeSchedule.service';

@Module({
    imports: [],
    controllers: [],
    providers: [TimeScheduleResolver, TimeScheduleService],
})
export class TimeScheduleModule { }
