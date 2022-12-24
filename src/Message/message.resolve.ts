import {Args, Mutation, Query, Resolver} from "@nestjs/graphql";
import {Message} from "./models/message.model";
import {MessageService} from "./message.service";
import {NewMessageInput} from "./dto/new-message.input";
import {MessageListArgs} from "./dto/message-list.args";

@Resolver(of => Message)
export class MessageResolve{
    constructor(private readonly messageService:MessageService) {}

    @Mutation(returns => Message)
    async addMessage(@Args('newMessageData') data:NewMessageInput):Promise<Message>{
        const msg = await this.messageService.createMessage(data)
        return msg
    }

    @Query(returns => [Message])
    async getMessageList(@Args() messageListQuery:MessageListArgs):Promise<Message[]>{
        const msgs = await this.messageService.getMessageList(messageListQuery)
        return msgs
    }
}