import { Module } from '@nestjs/common';
import {ChannelResolver} from "./channel.resolver";
import {ChannelService} from "./channel.service";
import {DbModule} from "../Common/Db/db.module";

@Module({
    imports:[DbModule],
    providers:[ChannelResolver,ChannelService]
})
export class ChannelModule{}