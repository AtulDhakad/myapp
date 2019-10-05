import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  

  ngOnInit() {
  }

  logout(){
 
    this.authenticationService.logout();
    
     }

}
