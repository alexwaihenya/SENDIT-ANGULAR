import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store'
import { Router } from '@angular/router';
import { IUser } from 'src/app/intefaces/user';
import { ApiUserService } from '../../services/api.user.service';
import { Irole } from 'src/app/intefaces/Irole';

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

    
    // this.store.select('login').subscribe(state=>{
    //   this.LogIn = state
    // })
  }

  role!:Irole

  LogIn(data: IUser) {
    console.log(data);
    // this.store.dispatch({type:'LOGIN_USER'})
    
    

    this.apiService.login(data.email,data.password).subscribe(res => {
    localStorage.setItem("token",res.token)
      this.checkRole()
    })
    setTimeout(() => {

      this.redirect()
    }, 1000);

    // this.route.navigate(['/admin/all-orders'])
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

      this.router.navigate(['/admin']);

      localStorage.setItem('isLoggedIn', 'true')
    }
  }



}
