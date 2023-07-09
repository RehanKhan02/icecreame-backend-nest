import { Injectable, NotFoundException } from "@nestjs/common";
import { makeIcecreameDto } from "./makeIcecreame.dto";

@Injectable()
export class icecreameService {

    icecreames: makeIcecreameDto[] = []

    getIcecreame(id: string): makeIcecreameDto {
        const ic = this.icecreames.filter(ic => ic.id === parseInt(id))[0];
        if(ic)
            return ic;
        throw new NotFoundException('ice creame not found!');
    }

    MakeIcecreame(icecreame: makeIcecreameDto): makeIcecreameDto {
        this.icecreames.push({...icecreame, id: this.icecreames.length +1});
        return icecreame;
    }

    listIceCreame(): makeIcecreameDto[] {
        return this.icecreames;
    }

    deleteIcecreame(id: string): Boolean {
        const idx = this.icecreames.findIndex((ic, i) => { ic.id === parseInt(id) })
        const ic = this.icecreames.splice(idx,1);
        if(idx)
            return true;
        throw new NotFoundException('ice creame not found!');
    }
}