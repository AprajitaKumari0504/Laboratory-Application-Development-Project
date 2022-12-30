import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

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


