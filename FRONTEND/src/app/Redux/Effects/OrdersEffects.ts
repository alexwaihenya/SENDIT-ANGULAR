import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
<<<<<<< HEAD
import { Store } from "@ngrx/store"
import { catchError, concatMap, map, mergeMap, of, tap } from "rxjs"
=======
<<<<<<< HEAD
import { Store } from "@ngrx/store"
import { catchError, concatMap, map, mergeMap, of, tap } from "rxjs"
=======
import { catchError, concatMap, map, mergeMap, of } from "rxjs"
>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
import { ApiUserService } from "src/app/modules/auth/services/api.user.service"

import * as OrdersActions from '../Actions/OrdersActions'

@Injectable({
    providedIn: 'root'
})


export class OrderEffectsService {
<<<<<<< HEAD
    constructor(private actions: Actions,private store: Store, private parcelService: ApiUserService) { }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    constructor(private actions: Actions, private parcelService: ApiUserService) { }
=======
    constructor(private actions: Actions,private store: Store, private parcelService: ApiUserService) { }
>>>>>>> master
=======
    constructor(private actions: Actions, private parcelService: ApiUserService) { }
>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3


    addParcel = createEffect(() => {
        return this.actions.pipe(
            ofType(OrdersActions.AddParcel),
            mergeMap(action => this.parcelService.createParcel(action.newParcel).pipe(
                map(res => OrdersActions.AddParcelSuccess({ addMessage: res.message })),
                catchError(error => of(OrdersActions.AddParcelFailure({ error: error })))
            ))
        )
    })

    loadParcel = createEffect(() => {
        return this.actions.pipe(
            ofType(OrdersActions.LoadParcels),
            concatMap(() => this.parcelService.getParcels().pipe(
                map(parcels => OrdersActions.LoadParcelsSuccess({ parcels })),
                catchError(error => of(OrdersActions.LoadParcelsFailure({ error: error.message })))
            ))
        )
    })


    deleteParcel = createEffect(() => {
        return this.actions.pipe(
            ofType(OrdersActions.DeleteParcel),
<<<<<<< HEAD
            mergeMap(action => this.parcelService.deleteParcel(action.parcel_id).pipe(
                tap(res=>this.store.dispatch(OrdersActions.LoadParcels())),
=======
<<<<<<< HEAD
<<<<<<< HEAD
            mergeMap(action => this.parcelService.deleteParcel(action.id).pipe(
=======
            mergeMap(action => this.parcelService.deleteParcel(action.parcel_id).pipe(
                tap(res=>this.store.dispatch(OrdersActions.LoadParcels())),
>>>>>>> master
=======
            mergeMap(action => this.parcelService.deleteParcel(action.id).pipe(
>>>>>>> 12ebafb145af38e63c15c48887952868a39f71e6
>>>>>>> 11a9c7def9c938dc3b1379ae6656c0d589f85ef3
                map(res => OrdersActions.DeleteParcelSuccess({ deletemessage: res.message })),
                catchError(error => of(OrdersActions.DeleteParcelFailure({ error: error.message })))
            ))

        )
    })
}