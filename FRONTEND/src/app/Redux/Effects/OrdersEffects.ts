import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, concatMap, map, mergeMap, of } from "rxjs"
import { ApiUserService } from "src/app/modules/auth/services/api.user.service"

import * as OrdersActions from '../Actions/OrdersActions'

@Injectable({
    providedIn: 'root'
})


export class OrderEffectsService {
    constructor(private actions: Actions, private orderService: ApiUserService) { }


    addProduct = createEffect(() => {
        return this.actions.pipe(
            ofType(OrdersActions.AddOrder),
            mergeMap(action => this.orderService.createParcel(action.newOrder).pipe(
                map(res => OrdersActions.AddOrderSuccess({ addMessage: res.message })),
                catchError(error => of(OrdersActions.AddOrderFailure({ error: error })))
            ))
        )
    })

    loadOrder = createEffect(() => {
        return this.actions.pipe(
            ofType(OrdersActions.LoadOrders),
            concatMap(() => this.orderService.getParcels().pipe(
                map(orders => OrdersActions.LoadOrdersSuccess({ orders })),
                catchError(error => of(OrdersActions.LoadOrdersFailure({ error: error.message })))
            ))
        )
    })


    deleteOrder = createEffect(() => {
        return this.actions.pipe(
            ofType(OrdersActions.DeleteOrder),
            mergeMap(action => this.orderService.deleteParcel(action.id).pipe(
                map(res => OrdersActions.DeleteOrderSuccess({ deletemessage: res.message })),
                catchError(error => of(OrdersActions.DeleteOrderFailure({ error: error.message })))
            ))

        )
    })
}