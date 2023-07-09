import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private auth:AuthService){}
get getUserName(){
  return this.auth.currentUser?.userName;
}
logOut(){
  this.auth.logOut();
}
get IsloggedIn(){
  return this.auth.isLoggedIn;
}
}
