import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergydrinkAboutComponent } from './energydrink-about.component';

describe('EnergydrinkAboutComponent', () => {
  let component: EnergydrinkAboutComponent;
  let fixture: ComponentFixture<EnergydrinkAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergydrinkAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergydrinkAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
