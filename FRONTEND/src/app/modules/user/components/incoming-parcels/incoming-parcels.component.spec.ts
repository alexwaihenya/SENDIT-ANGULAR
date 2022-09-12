import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingParcelsComponent } from './incoming-parcels.component';

describe('IncomingParcelsComponent', () => {
  let component: IncomingParcelsComponent;
  let fixture: ComponentFixture<IncomingParcelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingParcelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
