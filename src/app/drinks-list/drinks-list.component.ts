import { Component, OnInit } from '@angular/core';
import { DrinkCartService } from '../drink-cart.service';
import { DrinkDataService } from '../drink-data.service';
import { Drink } from './Drink';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  drinks: Drink[] = [
    /*{
      "name": "Red Bull",
      "type": "Tropical Edition",
      "price": 234,
      "stock": 0,
      "image": "assets/images/redbull-energy.drink-tropical.png",
      "clearance": true,
      "class": "tropical-edition",
      "quantity": 0
    },
    {
     "name": "Red Bull",
     "type": "Energy Drink",
     "price": 234,
     "stock": 120,
     "image": "assets/images/redbull-energy.drink.png",
     "clearance": false,
     "class": "energy-drink",
     "quantity": 0
   },
  {
    "name": "Red Bull",
    "type": "Sugarfree",
    "price": 234,
    "stock": 0,
    "image": "assets/images/redbull-sugarfree.png",
    "clearance": false,
    "class": "sugarfree",
    "quantity": 0
  },
  {
    "name": "Monster",
    "type": "Classic",
    "price": 234,
    "stock": 120,
    "image": "assets/images/monster-energy.webp",
    "clearance": true,
    "class": "monster",
    "quantity": 0
  },
  {
    "name": "Monster",
    "type": "Zero Sugar",
    "price": 234,
    "stock": 0,
    "image": "assets/images/monster-energy-zerosugar.webp",
    "clearance": false,
    "class": "monster-zerosugar",
    "quantity": 0
  },*/
  
];

  constructor(
    private cart: DrinkCartService,
    private drinksDataService: DrinkDataService
    ) {
   }

  ngOnInit(): void {
    this.drinksDataService.getAll()
    .subscribe(drinks => this.drinks = drinks);
  }

  addToCart(drink):void {
    this.cart.addToCart(drink);
    drink.stock -= drink.quantity;
    drink.quantity = 0;
  }
 
  maxReached(mensaje: string): void {
    alert(mensaje);
  }

}
