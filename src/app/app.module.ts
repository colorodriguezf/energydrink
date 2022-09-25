import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrinksListComponent } from './drinks-list/drinks-list.component';

import { FormsModule  } from '@angular/forms';
import { EnergydrinkAboutComponent } from './energydrink-about/energydrink-about.component';
import { EnergydrinkDrinksComponent } from './energydrink-drinks/energydrink-drinks.component';
import { CartComponent } from './cart/cart.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksListComponent,
    EnergydrinkAboutComponent,
    EnergydrinkDrinksComponent,
    CartComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
