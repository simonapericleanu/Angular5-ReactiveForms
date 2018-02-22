import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CareTaker, Animal } from '../../shared/interfaces.d';
import { environment } from '../../environments/environment';

@Injectable()
export class AnimalsEditService {

    constructor(private http: HttpClient) {}

    public getCareTakers(): Observable<CareTaker[]> {
        return this.http.get<CareTaker[]>(environment.apiBaseUrl + 'care-takers');
    }

    public addAnimal(animal: Animal): Observable<Animal> {
        return this.http.post<Animal>(environment.apiBaseUrl + 'animals', animal);
    }

    public getAnimal(id: number): Observable<Animal>{
        return this.http.get<Animal>(environment.apiBaseUrl + 'animals?id=' + id);
    }

    public updateAnimal(id: number, animal: Animal): Observable<Animal>{
        return this.http.put<Animal>(environment.apiBaseUrl + 'animals/' + id, animal);
    }
}
