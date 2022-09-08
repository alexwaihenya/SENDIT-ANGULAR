import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form!:FormGroup

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username:[null,[Validators.required]],
      email:[null,[Validators.required,Validators.email]],
      password:[null,[Validators.required]]


    })
  }

  onRegister(){
    console.log(this.form.value);

    let object ={
      form: this.form.value
    }
    // this.apiService.registerUser(object.form).subscribe(res=>{
    //   console.log(res);
    //   this.router.navigate(['auth/login'])
      
    // })
    

  }

}
