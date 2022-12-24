import {Injectable} from "@nestjs/common";
import {Message} from "./models/message.model";
import {NewMessageInput} from "./dto/new-message.input";
import {MessageListArgs} from "./dto/message-list.args";
import {DbService} from "../Common/Db/db.service";

@Injectable()
export class MessageService {
    constructor(private readonly dbService:DbService) {
    }
    async createMessage(data:NewMessageInput):Promise<Message>{
        const res = await this.dbService.message.create({data})
        return res
    }

    async getMessageList(args:MessageListArgs):Promise<Message[]> {
        const list = await this.dbService.message.findMany({
            where:{
                cid:args.channel
            },
            take: args.pageSize,
            skip: (args.page-1)*args.pageSize
        })
        return list
    }
}