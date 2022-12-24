import { Test, TestingModule } from '@nestjs/testing';
import {MessageService} from "./message.service";
import {DbService} from "../Common/Db/db.service";


const messages = [
    {id:1,cid:1,title:'t1',content:'c1'},
    {id:2,cid:1,title:'t2',content:'c2'}
]
const messageInputs = [
    {cid:1,title:'t1',content:'c1'},
    {cid:1,title:'t2',content:'c2'}
]
const messageQuery = {
    channel:1,
    page:1,
    pageSize:20
}
describe('message service',()=>{
    let messageService:MessageService;
    let idx = 0;
    const mockDb = {
        message:{create:()=>Promise.resolve({}),findMany: ()=>Promise.resolve(messages)}
    }
    beforeEach(async ()=>{
        mockDb.message.create = ()=>Promise.resolve(messages[idx++])
        const app:TestingModule = await Test.createTestingModule({
            providers:[MessageService,DbService]
        }).overrideProvider(DbService)
            .useValue(mockDb).compile()
        messageService = app.get<MessageService>(MessageService)
    })
    it('message service should be created',()=>{
        expect(messageService).toBeDefined()
    })
    describe('create first',()=>{
        it('should create first message',()=>{
            expect(messageService.createMessage(messageInputs[0])).resolves.toEqual(messages[0])
        })
    })

    describe('create second',()=>{
        it('should create second message',()=>{
           expect(messageService.createMessage(messageInputs[1])).resolves.toEqual(messages[1])
        })
    })
    describe('should get message list',()=>{
        it('should get message list',()=> {
            expect(messageService.getMessageList(messageQuery)).resolves.toEqual(messages)
        })
    })

})