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
    name: 'Red Bull ',
    type: 'Energy Drink',
    price: 234,
    stock: 120,
    image: 'assets/images/redbull-energy.drink.png',
    clearance: false
  },
  {
    name: 'Red Bull ',
    type: 'Energy Drink',
    price: 234,
    stock: 0,
    image: 'assets/images/redbull-energy.drink.png',
    clearance: true
  },
  {
    name: 'Red Bull ',
    type: 'Energy Drink',
    price: 234,
    stock: 0,
    image: 'assets/images/redbull-energy.drink.png',
    clearance: false
  },
  {
    name: 'Red Bull ',
    type: 'Energy Drink',
    price: 234,
    stock: 120,
    image: 'assets/images/redbull-energy.drink.png',
    clearance: true
  },
  {
    name: 'Red Bull ',
    type: 'Energy Drink',
    price: 234,
    stock: 0,
    image: 'assets/images/redbull-energy.drink.png',
    clearance: false
  },
  
]
  constructor() { }

  ngOnInit(): void {
  }

}
