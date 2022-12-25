import {Module} from "@nestjs/common";
import {DbService} from "./Db/db.service";

@Module({
    providers:[DbService],
    exports:[DbService]
})
export class CommonModule {}