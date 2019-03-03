import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveItemsMapComponent } from './active-items-map.component';

describe('ActiveItemsMapComponent', () => {
  let component: ActiveItemsMapComponent;
  let fixture: ComponentFixture<ActiveItemsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveItemsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveItemsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
