import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { NewChannelInput } from './dto/new-channel.input';
import { Channel } from './models/channel.model';
import {ChannelService} from "./channel.service";


@Resolver(of => Channel)
export class ChannelResolver {
    constructor(private readonly channelService: ChannelService) {}



    @Mutation(returns => Channel)
    async addChannel(
        @Args('newChannelData') newChannelData: NewChannelInput,
    ): Promise<Channel> {
        const channel = await this.channelService.create(newChannelData);
        return channel;
    }

}

