import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergydrinkDrinksComponent } from './energydrink-drinks.component';

describe('EnergydrinkDrinksComponent', () => {
  let component: EnergydrinkDrinksComponent;
  let fixture: ComponentFixture<EnergydrinkDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergydrinkDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergydrinkDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
