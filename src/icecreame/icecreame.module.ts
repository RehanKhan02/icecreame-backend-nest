import { Module } from "@nestjs/common";
import { icecreameController } from "./icecreame.controller";
import { icecreameService } from "./icecreame.service";

@Module({
    controllers: [icecreameController],
    providers: [icecreameService]
})
export class icecreameModule {}