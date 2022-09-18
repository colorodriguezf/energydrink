import { Component, OnInit } from '@angular/core';
import { Drink } from './Drink';

@Component({
  selector: 'app-drinks-list',
  templateUrl: './drinks-list.component.html',
  styleUrls: ['./drinks-list.component.scss']
})
export class DrinksListComponent implements OnInit {
  drinks: Drink[] = [
    {
      name: 'Red Bull',
      type: 'Tropical Edition',
      price: 234,
      stock: 0,
      image: 'assets/images/redbull-energy.drink-tropical.png',
      clearance: true,
      class: 'tropical-edition',
      quantity: 0
    },
    {
     name: 'Red Bull',
     type: 'Energy Drink',
     price: 234,
     stock: 120,
     image: 'assets/images/redbull-energy.drink.png',
     clearance: false,
     class: 'energy-drink',
     quantity: 0
   },
  {
    name: 'Red Bull',
    type: 'Sugarfree',
    price: 234,
    stock: 0,
    image: 'assets/images/redbull-sugarfree.png',
    clearance: false,
    class: 'sugarfree',
    quantity: 0
  },
  {
    name: 'Monster',
    type: 'Classic',
    price: 234,
    stock: 120,
    image: 'assets/images/monster-energy.webp',
    clearance: true,
    class: 'monster',
    quantity: 0
  },
  {
    name: 'Monster',
    type: 'Zero Sugar',
    price: 234,
    stock: 0,
    image: 'assets/images/monster-energy-zerosugar.webp',
    clearance: false,
    class: 'monster-zerosugar',
    quantity: 0
  },
  
]
  constructor() { }

  ngOnInit(): void {
  }

  upQuantity(drink: Drink): void {
    if(drink.quantity < drink.stock) {
      drink.quantity ++;
    }
  }
  downQuantity(drink: Drink): void {
    if(drink.quantity > 0) {
      drink.quantity --;
    }
  }

  changeQuantity(event:any, drink:Drink): void {
    console.log(event);
  }

}
