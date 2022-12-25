import { Injectable } from '@nestjs/common';
import { NewChannelInput } from './dto/new-channel.input';
import { Channel } from './models/channel.model';
import {DbService} from "../Common/Db/db.service";
import {GeneralErrorMsg, UniqueKeyErrorMsg} from "../Constants/ErrorMsg";
import {DbErrorWrapper} from "../Traits/MiscHelper";

@Injectable()
export class ChannelService {
    constructor(private readonly dbService:DbService) {
    }

    async create(data: NewChannelInput): Promise<Channel> {
        return DbErrorWrapper(async ()=>{
            return await this.dbService.channel.create({data})
        })
    }

}