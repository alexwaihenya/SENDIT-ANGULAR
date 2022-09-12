import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/modules/auth/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router,public authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogout(){
    localStorage.clear()
    this.router.navigate([''])
  }

}
