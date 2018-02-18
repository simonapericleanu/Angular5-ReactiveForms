import { AnimalType } from './enums/animal-type.enum';

export interface Animal {
    id: number;
    name: string;
    type: AnimalType;
    careTaker: CareTaker;
}

export interface CareTaker {
    id: number;
    firstName: string;
    lastName: string;
}
