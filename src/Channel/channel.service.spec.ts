import { Test, TestingModule } from '@nestjs/testing';
import {ChannelService} from "./channel.service";
import {DbService} from "../Common/Db/db.service";


const oneChannel = {
    id:1,
    name:'hehe'
}
const createChannelInput = {
    name:'hehe'
}
describe('ChannelService',()=>{
    let channelService: ChannelService;
    const mockDb = {
        channel:{create: ()=>Promise.resolve(oneChannel)}
    }
    beforeEach(async ()=>{
        const app:TestingModule = await Test.createTestingModule({
            providers:[ChannelService,DbService]
        }).overrideProvider(DbService)
            .useValue(mockDb).compile()
        channelService = app.get<ChannelService>(ChannelService)
    })
    it('channel service should be defined',()=>{
        expect(channelService).toBeDefined()
    })
    describe('create()',()=>{
        it('should create a channel',()=>{
            expect(channelService.create(createChannelInput)).resolves.toEqual(oneChannel)
        })
    })
})