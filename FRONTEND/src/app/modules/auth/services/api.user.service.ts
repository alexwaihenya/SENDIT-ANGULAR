import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IParcel } from 'src/app/intefaces';
import { Irole } from 'src/app/intefaces/Irole';
import { IUser, LoginDetails } from 'src/app/intefaces/user';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  baseUrl: string = "http://localhost:5000/parcels"
  parcels$!: Observable<IParcel[]>

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
  updateParcel(parcel_id:number,parcel:IParcel):Observable<{message:string}>{
    return this.http.put<{ message: string }>(`${this.baseUrl}/update/${parcel_id}`,parcel)
  }
  updateParcelSatus(parcel_id:number,parcel:IParcel):Observable<{message:string}>{
    return this.http.put<{ message: string }>(`${this.baseUrl}/sent/${parcel_id}`,parcel)
  }

  

  registerUser(user: IUser): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('http://localhost:5000/users/register', user)
  }
  login(userCredentials:LoginDetails) {
    this.checkUser()
    return this.http.post<IUser>('http://localhost:5000/users/login',userCredentials)



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
