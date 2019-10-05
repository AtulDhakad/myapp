import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
      private router:Router,
      private authenticationService:AuthenticationService
      
    ){}


  canActivate(){
      
      if(this.authenticationService.isLogined()){ 
         return  true;
      }else{
         return  this.router.navigate(['login']);
      }
     
  }
  
}
