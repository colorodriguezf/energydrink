import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EnergydrinkDrinksComponent} from './energydrink-drinks/energydrink-drinks.component';
import { EnergydrinkAboutComponent } from './energydrink-about/energydrink-about.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'drinks',
    pathMatch: 'full'
  },
  {
    path: 'drinks',
    component:EnergydrinkDrinksComponent
  },
  {
    path: 'about',
    component: EnergydrinkAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
