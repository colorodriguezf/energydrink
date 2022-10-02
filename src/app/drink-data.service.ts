import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { Drink } from './drinks-list/Drink';

const URL = 'https://633a008ce02b9b64c60b8e7e.mockapi.io/api/v1/drinks';

@Injectable({
  providedIn: 'root'
})
export class DrinkDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Drink[]> {
    //fetch('url', {method: 'GET'})

   return this.http.get<Drink[]>(URL)
              .pipe(
                tap((drinks: Drink[]) => drinks.forEach(drink => drink.quantity = 0))
              );
  }
}
