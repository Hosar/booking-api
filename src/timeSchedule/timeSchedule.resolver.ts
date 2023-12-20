import { Resolver, Query } from '@nestjs/graphql';
import { TimeScheduleModel, TimeScheduleModel2 } from './models';
import { TimeScheduleService } from './timeSchedule.service';

@Resolver()
export class TimeScheduleResolver {
    constructor(private timeScheduleService: TimeScheduleService) {

    }

    @Query(() => [[TimeScheduleModel]])
    async getBookingSpots() {
        return this.timeScheduleService.getBookingSpots();
    }

    @Query(() => [[TimeScheduleModel2]])
    async getAll() {
        return this.timeScheduleService.getAll();
    }


}
