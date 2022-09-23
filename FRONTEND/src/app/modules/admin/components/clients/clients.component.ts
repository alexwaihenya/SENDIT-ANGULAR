import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/intefaces/user';
import { ApiUserService } from 'src/app/modules/auth/services/api.user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  customers!:IUser[]

  filter=''
  p: number = 1;

  constructor(private apiService:ApiUserService ) { }

  ngOnInit(): void {
    this.getUsers()
  }


  getUsers(){

    this.apiService.getUsers().subscribe((res)=>{
      console.log(res);

      this.customers = res
      
    })

  }

 



}
