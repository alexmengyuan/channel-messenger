import { Injectable } from '@nestjs/common';
import { NewChannelInput } from './dto/new-channel.input';
import { Channel } from './models/channel.model';
import {DbService} from "../Common/Db/db.service";

@Injectable()
export class ChannelService {
    constructor(private readonly dbService:DbService) {
    }

    async create(data: NewChannelInput): Promise<Channel> {
        const res = await this.dbService.channel.create({data})
        return res
    }

}