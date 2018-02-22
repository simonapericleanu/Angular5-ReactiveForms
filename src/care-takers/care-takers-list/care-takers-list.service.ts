import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CareTaker } from '../../shared/interfaces.d';
import { environment } from '../../environments/environment';

@Injectable()
export class CareTakersListService {

    constructor(private http: HttpClient) {}

    public getCareTakers(): Observable<CareTaker[]> {
        return this.http.get<CareTaker[]>(environment.apiBaseUrl + 'care-takers');
    }

    public deleteCareTaker(id: number): Observable<CareTaker> {
        return this.http.delete<CareTaker>(environment.apiBaseUrl + 'care-takers/' + id);
    }
}
