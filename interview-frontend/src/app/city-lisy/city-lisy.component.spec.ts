import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityLisyComponent } from './city-lisy.component';

describe('CityLisyComponent', () => {
  let component: CityLisyComponent;
  let fixture: ComponentFixture<CityLisyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityLisyComponent]
    });
    fixture = TestBed.createComponent(CityLisyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
