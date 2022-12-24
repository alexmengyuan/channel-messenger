import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'channel' })
export class Channel {
    @Field(type => ID)
    id: number;

    @Field()
    name: string;

}