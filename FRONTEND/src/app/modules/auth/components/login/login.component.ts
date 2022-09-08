import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { IUser } from 'src/app/intefaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  LogIn(data: IUser) {

    this.apiService.loginUser(data).subscribe(res => {
      localStorage.setItem("token", res.token)
      this.checkRole()
    })
    setTimeout(() => {

      this.redirect()
    }, 500);

    // this.route.navigate(['/admin/all-orders'])
  }
  checkRole() {
    this.apiService.checkUserRole().subscribe(res => {
      console.log(res)

    })
  }

  redirect() {
    let role = localStorage.getItem('role')
    if (role == 'user') {

      this.router.navigate(['/home/user/user-dashboard']);

      localStorage.setItem('isLoggedIn', 'true')

    } else if (role == 'admin') {

      this.router.navigate(['/admin']);

      localStorage.setItem('isLoggedIn', 'true')
    }
  }



}
