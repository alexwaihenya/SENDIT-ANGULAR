import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IOrder } from 'src/app/intefaces';
import { Irole } from 'src/app/intefaces/Irole';
import { IUser } from 'src/app/intefaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  baseUrl: string = "http://localhost:3000"
  orders$!:Observable<IOrder[]>

  constructor(private http:HttpClient) { }

  getOrders() : Observable <IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders`)
  }
  getOrderDetails(id:number): Observable<IOrder[]>{
    return this.http.get<IOrder[]>(`${this.baseUrl}/orders/${id}`)
  }
  
  deleteOrder(id:number): Observable <{message:string}>{
    return this.http.delete<{message:string}>(`${this.baseUrl}/orders/${id}`)
  }
  createOrder(order:IOrder):Observable<{message:string}>{
    return this.http.post<{message:string}>(`${this.baseUrl}/orders`, order)
  }




  registerUser(user:IUser):Observable <{message:string}>{
    return this.http.post<{message:string}>('http://localhost:5000/users/register',user)
  }
  login(email:string,password:string){
    this.checkUser()
    return this.http.post<IUser>('http://localhost:5000/users/login',{email,password})



  }
  checkUser(){
    let token = localStorage.getItem('token') as string
    return this.http.get<Irole>('http://localhost:5000/users/check',{
      headers:new HttpHeaders({
        'token':token
      })
    }).pipe(map((res)=>{
      localStorage.setItem('email',res.email)
      localStorage.setItem('role',res.role)
      return res.role
    }))
  }

}
