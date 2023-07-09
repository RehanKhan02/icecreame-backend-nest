import { IsString } from "class-validator"
import { IsNotEmpty, IsBoolean, IsNumber, Length, Min } from "class-validator"

export class makeIcecreameDto { 
    
    id?: number
    
    @IsNotEmpty({message: 'ice creame name is required.'})
    @IsString({message: 'ice creame name should be string.'})
    @Length(5, 100, {message: 'ice creame name should be > 5 and < 100'})    
    name: string

    @IsString()
    @Length(5)
    flavour: string

    @IsBoolean()      
    cone!: boolean

    @IsNumber()
    @Min(1)
    quantity: number
}

export class IceCreameList {
    iclist: makeIcecreameDto[]
}