import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CareTaker } from '../../shared/interfaces.d';
import { environment } from '../../environments/environment';

@Injectable()
export class CareTakersEditService {

    constructor(private http: HttpClient) {}

    public getCareTaker(id: number): Observable<CareTaker>{
        return this.http.get<CareTaker>(environment.apiBaseUrl + 'care-takers?id=' + id);
    }

    public addCareTaker(careTaker: CareTaker): Observable<CareTaker>{
        return this.http.post<CareTaker>(environment.apiBaseUrl + 'care-takers', careTaker);
    }

    public updateCareTaker(id: number, careTaker: CareTaker): Observable<CareTaker>{
        return this.http.put<CareTaker>(environment.apiBaseUrl + 'care-takers/' + id, careTaker);
    }
}
