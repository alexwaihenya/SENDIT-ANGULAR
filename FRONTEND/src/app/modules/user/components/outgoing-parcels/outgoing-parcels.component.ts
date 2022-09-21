import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import { getParcels, ParcelState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions';

@Component({
  selector: 'app-outgoing-parcels',
  templateUrl: './outgoing-parcels.component.html',
  styleUrls: ['./outgoing-parcels.component.css'],
})
export class OutgoingParcelsComponent implements OnInit {
  sentParcels: any;
  email!: string;
  parcels$ = this.store.select(getParcels);


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parcelService: ApiUserService,
    private store: Store<ParcelState>
  ) {}


  ngOnInit(): void {
    this.store.dispatch(Actions.LoadParcels());

    this.parcels$.subscribe((parcels) => {
      this.email = localStorage.getItem('email')!;

      this.sentParcels = parcels.filter((sent) => {

        return sent.senderemail == this.email;
        
        
        
      });
    });
  }
}
