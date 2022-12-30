import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.regForm = this.fb.group({
      name:'',
      email: '',
      password: '',
      role:''
    });
  }

  onSubmit(){
    console.log(this.regForm.value);
    
  }

}
