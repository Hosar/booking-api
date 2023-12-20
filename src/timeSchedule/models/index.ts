import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TimeScheduleModel {
    @Field()
    time: string;

    @Field()
    isAvailable: boolean;

    @Field()
    exist: boolean;
}

@ObjectType()
export class TimeScheduleModel2 {
    @Field()
    day: number;

    @Field(() => [TimeScheduleModel])
    spots: TimeScheduleModel[];
}


// @ObjectType()
// export class Post {
//     @Field()
//     key: number;

//     @Field()
//     values: string[];
// }
