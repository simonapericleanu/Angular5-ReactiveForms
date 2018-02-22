import { AnimalType } from './enums/animal-type.enum';

export interface Animal {
    id: number;
    name: string;
    class: string;
    typeID: AnimalType;
    careTakerID: number;
}

export interface CareTaker {
    id: number;
    firstName: string;
    lastName: string;
}
