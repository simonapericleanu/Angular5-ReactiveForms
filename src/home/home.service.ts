import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal, CareTaker } from '../shared/interfaces';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class HomeService {
    constructor(private http: HttpClient) {}

    public getAnimals(): Observable<Animal[]>{
        return this.http.get<Animal[]>(environment.apiBaseUrl + 'animals');
    }

    public getCareTakers(): Observable<CareTaker[]>{
        return this.http.get<CareTaker[]>(environment.apiBaseUrl + 'care-takers');
    }
}