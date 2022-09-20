import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LockChanges } from '@ngrx/store-devtools/src/actions';
import { map, Observable } from 'rxjs';
import { IParcel } from 'src/app/intefaces';
import { Irole } from 'src/app/intefaces/Irole';
import { IUser } from 'src/app/intefaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  baseUrl: string = "http://localhost:5000/parcels"
  orders$!: Observable<IParcel[]>

  constructor(private http: HttpClient) { }

  getParcels(): Observable<IParcel[]> {
    return this.http.get<IParcel[]>(`${this.baseUrl}/all`)
  }
  getParcelDetails(id: number): Observable<IParcel[]> {
    return this.http.get<IParcel[]>(`${this.baseUrl}/${id}`)
  }

  deleteParcel(parcel_id: number): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.baseUrl}/deleteparcel/${parcel_id}`)
  }

  createParcel(parcel: IParcel): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/add`, parcel)
  }

  registerUser(user: IUser): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('http://localhost:5000/users/register', user)
  }
  login(email: string, password: string) {
    this.checkUser()
    return this.http.post<IUser>('http://localhost:5000/users/login', { email, password })



  }
  checkUser() {
    let token = localStorage.getItem('token') as string
    return this.http.get<Irole>('http://localhost:5000/users/check', {
      headers: new HttpHeaders({
        'token': token
      })
    }).pipe(map((res) => {
      localStorage.setItem('email', res.email)
      localStorage.setItem('role', res.role)
      return res.role
    }))
  }

}
