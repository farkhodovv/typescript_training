import { AnimalType, DomesticType, PetType } from './animal';

type defineArgType = AnimalType | DomesticType | PetType
interface DefineResType {
    name?: string,
    maxLife: number
    gender: string
}

type DefineInfoType = (arg: defineArgType) => DefineResType;

const giveInfo: DefineInfoType = function (animal) {
    return animal
}

