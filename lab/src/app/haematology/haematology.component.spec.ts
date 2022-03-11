import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaematologyComponent } from './haematology.component';

describe('HaematologyComponent', () => {
  let component: HaematologyComponent;
  let fixture: ComponentFixture<HaematologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaematologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaematologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
