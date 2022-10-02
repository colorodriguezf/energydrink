import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Drink } from '../drinks-list/Drink';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }
   //input hace que funcionen los corchetes de drink-list linea 13 [] datos que entran
  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();
  //output + .emit(con nuevo valor) hace que funcionen los parentesis de drink-list linea 13 () datos que salen

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.quantity < this.max) {
      this.quantity ++;
      this.quantityChange.emit(this.quantity);
    }
    else {
      this.maxReached.emit("La cantidad maxima no puede superar el stock");
    }
  }
  downQuantity(): void {
    if(this.quantity > 0) {
      this.quantity --;
      this.quantityChange.emit(this.quantity);
    }
    else {
      this.maxReached.emit("La cantidad minima no puede ser menor que 0");
    }
  }

  changeQuantity(event:any): void {
    //console.log(event);
    this.quantityChange.emit(this.quantity);

  }

}
