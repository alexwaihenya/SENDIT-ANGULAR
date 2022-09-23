import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Actions from '../../UserState/Actions/UsersActions';
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/intefaces/user';
import { ApiUserService } from '../../services/api.user.service';
import { UserState } from '../../UserState/Reducers/UsersReducers';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;

  untouched = false;
  created = false;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiUserService,
    private router: Router,
    private store: Store<UserState>
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onRegister() {
    // console.log(this.form.value);
    if (this.form.untouched) {
      // this.untouched = !this.untouched
      this.untouched = true;
      setTimeout(() => {
        this.untouched = false
      }, 1000);

      return;
    }

    const newUser: IUser = { ...this.form.value };
    console.log(newUser);

    this.store.dispatch(Actions.Register({ newUser: this.form.value }));
    this.created = true;
    setTimeout(() => {
      this.router.navigate(['auth/login']);
    }, 1000);
  }
}
