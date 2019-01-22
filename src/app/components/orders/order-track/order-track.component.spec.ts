import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackComponent } from './order-track.component';

describe('OrderTrackComponent', () => {
  let component: OrderTrackComponent;
  let fixture: ComponentFixture<OrderTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
