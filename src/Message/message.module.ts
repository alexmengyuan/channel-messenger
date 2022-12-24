import {Module} from "@nestjs/common";
import {MessageResolve} from "./message.resolve";
import {MessageService} from "./message.service";
import {DateScalar} from "../Common/Scalars/date.scalar";
import {DbModule} from "../Common/Db/db.module";

@Module({
    imports:[DbModule],
    providers:[MessageResolve,MessageService,DateScalar]
})
export class MessageModule{}