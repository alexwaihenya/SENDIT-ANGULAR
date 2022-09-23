import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';
import { getParcels, ParcelState } from 'src/app/Redux/Reducers/OrdersReducers';
import * as Actions from '../../../../Redux/Actions/OrdersActions';

@Component({
  selector: 'app-incoming-parcels',
  templateUrl: './incoming-parcels.component.html',
  styleUrls: ['./incoming-parcels.component.css'],
})
export class IncomingParcelsComponent implements OnInit {
  email: string = '';
  sentParcels: any;
  receivedParcels: any;

  filter = '';
  p: number = 1;

  parcels$ = this.store.select(getParcels);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private parcelService: ApiUserService,
    private store: Store<ParcelState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.LoadParcels());
    this.parcels$.subscribe((res) => {
      console.log(this.parcels$);

      this.email = localStorage.getItem('email')!;

      this.receivedParcels = res.filter((data) => {
        return data.receiveremail == this.email;
      });
    });
  }


}
