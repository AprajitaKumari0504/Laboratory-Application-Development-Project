import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  @Output() activate = new EventEmitter<boolean>();

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit(){
    var loginDetails = this.loginForm.value;
    if(loginDetails.email === 'admin' && loginDetails.password === 'admin'){
      console.log("admin logged in successfully");
      
      this.activate.emit(true);
    }
    else{
      
      console.log("User Logged in Successfully");
      this.activate.emit(false);
    }
  }


}
