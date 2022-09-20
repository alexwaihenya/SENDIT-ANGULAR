import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, mergeMap, of, tap } from 'rxjs';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';

import * as OrdersActions from '../Actions/OrdersActions';

@Injectable({
  providedIn: 'root',
})
export class OrderEffectsService {
  constructor(
    private actions: Actions,
    private store: Store,
    private parcelService: ApiUserService
  ) {}

  addParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.AddParcel),
      mergeMap((action) =>
        this.parcelService.createParcel(action.newParcel).pipe(
          map((res) =>
            OrdersActions.AddParcelSuccess({ addMessage: res.message })
          ),
          catchError((error) =>
            of(OrdersActions.AddParcelFailure({ error: error }))
          )
        )
      )
    );
  });

  loadParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.LoadParcels),
      concatMap(() =>
        this.parcelService.getParcels().pipe(
          map((parcels) => OrdersActions.LoadParcelsSuccess({ parcels })),
          catchError((error) =>
            of(OrdersActions.LoadParcelsFailure({ error: error.message }))
          )
        )
      )
    );
  });

  deleteParcel = createEffect(() => {
    return this.actions.pipe(
      ofType(OrdersActions.DeleteParcel),
      mergeMap((action) =>
        this.parcelService.deleteParcel(action.parcel_id).pipe(
          tap((res) => this.store.dispatch(OrdersActions.LoadParcels())),
          map((res) =>
            OrdersActions.DeleteParcelSuccess({ deletemessage: res.message })
          ),
          catchError((error) =>
            of(OrdersActions.DeleteParcelFailure({ error: error.message }))
          )
        )
      )
    );
  });
}
