import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewParcelOrderComponent } from './new-parcel-order.component';

describe('NewParcelOrderComponent', () => {
  let component: NewParcelOrderComponent;
  let fixture: ComponentFixture<NewParcelOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewParcelOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewParcelOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
