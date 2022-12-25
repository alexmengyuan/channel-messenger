import {Module} from "@nestjs/common";
import {MessageResolve} from "./message.resolve";
import {MessageService} from "./message.service";
import {DateScalar} from "../Common/Scalars/date.scalar";
import {CommonModule} from "../Common/common.module";


@Module({
    imports:[CommonModule],
    providers:[MessageResolve,MessageService,DateScalar]
})
export class MessageModule{}