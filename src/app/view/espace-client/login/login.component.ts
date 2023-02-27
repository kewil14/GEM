import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { Utilisateur} from '../core/shared/models/Utilisateur.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm:FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router){

  }

  get login() { return this.loginForm.controls;}

  ngOnInit(): void { 
    this.loginForm=this.fb.group(
      {
        username:[null, Validators.compose([Validators.required, Validators.minLength(4)])],
        password:[null, Validators.compose([Validators.required,Validators.minLength(5)])]
      }
    )
  }
      
  OnsubmitFormControl(){

    if(this.loginForm.invalid) {
      return;
    } else {
      console.log(this.loginForm.value);
    }

    this.router.navigateByUrl('')
  }
}