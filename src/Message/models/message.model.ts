import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'message' })
export class Message {
    @Field(type => ID)
    id: number;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    cid: number;

    @Field()
    createAt: Date;
}