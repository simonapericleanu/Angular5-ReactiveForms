import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Animal, CareTaker } from '../../shared/interfaces.d';
import { environment } from '../../environments/environment';

@Injectable()
export class AnimalsListService {

    constructor(private http: HttpClient) {}

    public getAnimals(): Observable<Animal[]> {
        return this.http.get<Animal[]>(environment.apiBaseUrl + 'animals');
    }

    public getCareTakers(): Observable<CareTaker[]> {
        return this.http.get<CareTaker[]>(environment.apiBaseUrl + 'care-takers');
    }

    public deleteAnimal(id: number): Observable<Animal> {
        return this.http.delete<Animal>(environment.apiBaseUrl + 'animals/' + id);
    }
}
