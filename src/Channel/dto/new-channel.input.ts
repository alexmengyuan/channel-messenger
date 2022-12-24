import {Field, InputType} from '@nestjs/graphql';
import {MaxLength} from 'class-validator';

@InputType()
export class NewChannelInput {
    @Field()
    @MaxLength(64)
    name: string;
}