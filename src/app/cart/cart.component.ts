import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinkCartService } from '../drink-cart.service';
import { Drink } from '../drinks-list/Drink';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Drink[]>;

  constructor(private cart: DrinkCartService) {
    this.cartList$ = cart.cartList.asObservable();
   }

  ngOnInit(): void {
  }

}
