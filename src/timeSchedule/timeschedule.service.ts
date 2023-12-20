/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { TimeScheduleModel, TimeScheduleModel2 } from './models'

@Injectable()
export class TimeScheduleService {
    private timeSchedule: TimeScheduleModel[][] = [
        [
            { time: '8:15 pm', isAvailable: true, exist: true },
            { time: '9:15 pm', isAvailable: true, exist: true },
            { time: '10:15 pm', isAvailable: true, exist: true },
            { time: '11:15 pm', isAvailable: true, exist: true },
        ],
        [
            { time: '8:15 pm', isAvailable: true, exist: true },
            { time: '9:15 pm', isAvailable: true, exist: true },
            { time: '10:15 pm', isAvailable: true, exist: true },
            { time: '11:15 pm', isAvailable: true, exist: true },
        ],
    ];

    private spots: TimeScheduleModel2[][] = [
        [
            {
                day: 1,
                spots: [
                    { time: '8:15 pm', isAvailable: true, exist: true },
                    { time: '9:15 pm', isAvailable: true, exist: true },
                ]
            },
            {
                day: 2,
                spots: [
                    { time: '8:15 pm', isAvailable: true, exist: true },
                ]
            },
            {
                day: 3,
                spots: [
                    { time: '6:15 pm', isAvailable: true, exist: true },
                ]
            }
        ],
        [
            {
                day: 7,
                spots: [
                    { time: '8:15 pm', isAvailable: true, exist: true },
                    { time: '9:15 pm', isAvailable: true, exist: true },
                ]
            },
            {
                day: 8,
                spots: [
                    { time: '8:15 pm', isAvailable: true, exist: true },
                ]
            },
            {
                day: 9,
                spots: [
                    { time: '6:15 pm', isAvailable: true, exist: true },
                ]
            }
        ]
    ]

    getBookingSpots(): TimeScheduleModel[][] {
        return this.timeSchedule;
    }

    getAll(): TimeScheduleModel2[][] {
        return this.spots;
    }
}
