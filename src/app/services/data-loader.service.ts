import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {

  constructor(private http: HttpClient) {}

  public getPlaces(): Observable<any> {
    return this.http.get('./assets/resources/places.json');
  }
}
