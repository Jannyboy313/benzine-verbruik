import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCardComponent } from './fuel-card.component';

describe('FuelCardComponent', () => {
  let component: FuelCardComponent;
  let fixture: ComponentFixture<FuelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
