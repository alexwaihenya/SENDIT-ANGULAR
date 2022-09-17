import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingParcelsComponent } from './outgoing-parcels.component';

describe('OutgoingParcelsComponent', () => {
  let component: OutgoingParcelsComponent;
  let fixture: ComponentFixture<OutgoingParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingParcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutgoingParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
