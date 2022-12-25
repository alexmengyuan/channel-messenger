import { Module } from '@nestjs/common';
import {ChannelResolver} from "./channel.resolver";
import {ChannelService} from "./channel.service";
import {CommonModule} from "../Common/common.module";


@Module({
    imports:[CommonModule],
    providers:[ChannelResolver,ChannelService]
})
export class ChannelModule{}