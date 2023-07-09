import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private auth:AuthService){}
loginForm = new FormGroup({
  userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  password:new FormControl('',[Validators.required])
});
get getUserName(){
  return this.loginForm.controls['userName'];
}
get getPassword(){
  return this.loginForm.controls['password'];
}
login(e:any){
e.preventDefault();
if (this.loginForm.status == "VALID") {
this.auth.logIn(this.getUserName?.value,this.getPassword?.value);
  
}
console.log(this.loginForm)
// console.log(this.getUserName.value);
// console.log(this.getPassword.value);
}













}
