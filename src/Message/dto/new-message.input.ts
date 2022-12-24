import {Field, InputType} from '@nestjs/graphql';
import {MaxLength} from 'class-validator';

@InputType()
export class NewMessageInput {
    @Field()
    @MaxLength(64)
    title: string;

    @Field()
    @MaxLength(255)
    content: string;

    @Field()
    cid: number;
}