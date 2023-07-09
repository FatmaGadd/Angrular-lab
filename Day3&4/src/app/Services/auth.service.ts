import { Injectable } from '@angular/core';
import { IUser } from '../models/iuser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  currentUser:IUser|undefined
  logIn(user:string|null,pass:string|null){
    this.currentUser={userName:user,password:pass};
    this.router.navigate(["/products"]);
  }
  logOut(){
    this.currentUser=undefined;
    this.router.navigate(["/login"]);
  }
  get isLoggedIn():boolean{
    if (this.currentUser?.userName && this.currentUser?.password) {
      return true;
    } else {
      return false;
    }
  }

}
