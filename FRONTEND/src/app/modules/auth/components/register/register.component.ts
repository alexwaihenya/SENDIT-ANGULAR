import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import * as Actions from '../../UserState/Actions/UsersActions'
import { Store } from '@ngrx/store';
import { IUser } from 'src/app/intefaces/user';
import { ApiUserService } from '../../services/api.user.service';
import { UserState } from '../../UserState/Reducers/UsersReducers';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup

  constructor(private fb: FormBuilder, private apiService: ApiUserService, private router: Router,private store:Store<UserState>) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]


    })
  }
  filled = false

  onRegister() {
    // console.log(this.form.value);

    const newUser:IUser = {...this.form.value}
    console.log(newUser);

    this.store.dispatch(Actions.Register({newUser: this.form.value}))
    
    

    this.router.navigate(['auth/login'])

    


  }

}
