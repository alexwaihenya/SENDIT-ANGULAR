import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../modules/auth/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router,public authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onLogout(){
    localStorage.clear()
    this.router.navigate(['/'])
  }



}
