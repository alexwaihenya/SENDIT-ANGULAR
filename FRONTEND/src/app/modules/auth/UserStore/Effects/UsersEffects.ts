import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { ApiUserService } from '../../services/api.user.service';

import * as UsersActions from '../Actions/UsersActions';

@Injectable({
  providedIn: 'root',
})
export class UserEffectsService {
  constructor(
    private actions: Actions,
    private store: Store,
    private userService: ApiUserService
  ) {}

  addUser = createEffect(() => {
    return this.actions.pipe(
      ofType(UsersActions.Register),
      mergeMap((action) =>
        this.userService.registerUser(action.newUser).pipe(
          map((res) =>
            UsersActions.RegisterSuccess({ registerMessage: res.message })
          ),
          catchError((error) =>
            of(UsersActions.RegisterFailure({ error: error }))
          )
        )
      )
    );
  });
  loginUser = createEffect(() => {
    return this.actions.pipe(
      ofType(UsersActions.login),
      concatMap((res) =>
        this.userService.login(res.user).pipe(
          map((res) => UsersActions.LoginSuccess({ res })),
          catchError((error) =>
            of(UsersActions.LoginFailure({ error: error.message }))
          )
        )
      )
    );
  });
}
