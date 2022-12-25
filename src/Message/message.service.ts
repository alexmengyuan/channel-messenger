import {Injectable} from "@nestjs/common";
import {Message} from "./models/message.model";
import {NewMessageInput} from "./dto/new-message.input";
import {MessageListArgs} from "./dto/message-list.args";
import {DbService} from "../Common/Db/db.service";
import {DbErrorWrapper} from "../Traits/MiscHelper";

@Injectable()
export class MessageService {
    constructor(private readonly dbService:DbService) {
    }
    async createMessage(data:NewMessageInput):Promise<Message>{
        return DbErrorWrapper(async ()=> {
            return await this.dbService.message.create({data})
        })
    }

    async getMessageList(args:MessageListArgs):Promise<Message[]> {
        return DbErrorWrapper(async ()=> {
            return await this.dbService.message.findMany({
                orderBy: {
                    id: 'desc'
                },
                where: {
                    cid: args.channel
                },
                take: args.pageSize,
                skip: (args.page - 1) * args.pageSize
            })
        })
    }
}