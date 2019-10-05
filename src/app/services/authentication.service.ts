import { User } from './../models/user';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,private router:Router) { }

  
   
  isLogined(){
    var token  = localStorage.getItem('currentUser');
      if(token){   
      return token;
      }else{
      return null;
      }

   }

   login(email: string, password: string) {
    return this.http.post<any>(`${environment.apidomain}/serverport/login`, { email, password })
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
            
            console.log(JSON.stringify(user));
            
                localStorage.setItem('currentUser', JSON.stringify(user));
             return true; 
            }else{
              return false; 
            }
            
        })); 
  }

  logout(){
    localStorage.removeItem('currentUser');

    this.router.navigate(['login']);

  }




}
