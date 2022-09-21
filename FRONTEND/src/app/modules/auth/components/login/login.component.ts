import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Router } from '@angular/router';
import { IUser } from 'src/app/intefaces/user';
import { ApiUserService } from '../../services/api.user.service';
import { Irole } from 'src/app/intefaces/Irole';
import * as Actions from '../../UserState/Actions/UsersActions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService:ApiUserService,private router: Router,private store:Store<any>) { }

  errorMessage!:string
  error=''



  ngOnInit(): void {

    
   
  }

  role!:Irole

  LogIn(userCredentials: IUser) {
    console.log(userCredentials);
    // this.store.dispatch(Actions.login({userCredentials}))
    this.apiService.login(userCredentials).subscribe(res => {
    localStorage.setItem("token",res.token)
      this.checkRole()
    })
    setTimeout(() => {

      this.redirect()
    }, 1000);

    // this.router.navigate(['/admin/all-orders'])
  }
  checkRole() {
    this.apiService.checkUser().subscribe(res => {
      console.log(res)

    })
  }
 

  redirect() {
    let role = localStorage.getItem('role')
    if (role == 'user') {

      this.router.navigate(['/user/user-dashboard']);

      localStorage.setItem('isLoggedIn', 'true')

    } else if (role == 'admin') {

      this.router.navigate(['/admin/all-orders']);

      localStorage.setItem('isLoggedIn', 'true')
    }
  }



}
