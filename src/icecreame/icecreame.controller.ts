import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { icecreameService } from "./icecreame.service";
import { IceCreameList, makeIcecreameDto } from "./makeIcecreame.dto";

@Controller('icecreame')

export class icecreameController {
    constructor(private readonly icService : icecreameService){}
    @Get('/:id')
    getIcecreame(@Param('id') id) {
        console.log(id);
        return this.icService.getIcecreame(id)
    }

    @Delete('/:id')
    deleteIcecreame(@Param('id') id) {
        console.log(id);
        return this.icService.deleteIcecreame(id)
    }

    @Post()
    @UsePipes(ValidationPipe)
    async makeIcecreame(@Body() reqBody: makeIcecreameDto): Promise<makeIcecreameDto> {
        return this.icService.MakeIcecreame(reqBody);
    }

    @Post('/list')
    async listIcecreame(): Promise<IceCreameList> {
        return { iclist: this.icService.listIceCreame()}
    }
}