import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Drink } from './drinks-list/Drink';

/**
 * Maneja la logica del carrito
 * 
 */

@Injectable({
  providedIn: 'root'
})

export class DrinkCartService {

  private _cartList : Drink[] = []; //convertimos la variable que queremos observar en privada (estandar _)

  cartList: BehaviorSubject<Drink[]> = new BehaviorSubject([]); // variable BehaviorSubjet encapsulando a el carrito que es lo que queremos encapsular


  constructor() {}


  addToCart(drink: Drink) {
    let item: Drink = this._cartList.find((v1) => v1.type == drink.type && v1.name == drink.name);
    if (!item) {
      this._cartList.push({... drink}); //como no lo encontre, clono el objeto y hago el push
    }
    else {
      item.quantity += drink.quantity; //si no lo encuentro suma la cantidad
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //al BehaviorSubject que notifique que hubo un cambio en su variable privada. equivale al emitt de eventos
  }

}
