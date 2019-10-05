import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
   submited = false;
  

  constructor(
    private formBuilder: FormBuilder,
   private authenticationService:AuthenticationService,
   private router :Router
    ) { 

      if(this.authenticationService.isLogined()){
         this.router.navigate(['home']);
      }

    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  }


  loginSubmit(){

     const email =  this.loginForm.value.email;
     const password =  this.loginForm.value.password;

      this.authenticationService.login(email,password).pipe().subscribe(data=>{
         console.log(data);
   
         this.router.navigate(['home']);

      },error=>{
        console.log('hii error '+error);
      });


 }



}
