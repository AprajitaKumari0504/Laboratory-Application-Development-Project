import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.css']
})
export class SamplesComponent implements OnInit {
  heamatologyForm: any;
  thyroidForm: FormGroup;
  glucomteryForm: any;

  constructor() { }

  ngOnInit(): void {
    this.heamatologyForm  = new FormGroup({
      Heamoglobin: new FormControl(''),
      Neutrophils: new FormControl(''),
      Eosinophiles:new FormControl(''),
      Basophills:new FormControl(''),
      packedcell: new FormControl(''),
      totalcount: new FormControl(''),
      Lympjocytes: new FormControl(''),
      Monocytes:new FormControl(''),
      redbloodcell:new FormControl(''),
      meanmvc: new FormControl(''),
     });

     this.thyroidForm = new FormGroup({
      T3: new FormControl(''),
      T4: new FormControl(''),
      thyroidstimulatinghormone:new FormControl(''),
       
     })

     this.glucomteryForm = new FormGroup({
      fastingBloodsuger: new FormControl(''),
      ppbs:new FormControl(''),
      hbA1c:new FormControl(''),
      calcium: new FormControl(''),
     })


  }
  addHeamolologyProfile(){
    console.log('addHeamolologyProfile profile button clicked ');
    
  }

  addThyroidProfile1(){

  }
  addGlucomteryProfile2(){

  }

  heamatologyformSubmit(){
    console.log(this.heamatologyForm.value);
    
  }

  thyroidSubmit(){
    console.log(this.thyroidForm.value);
    
  }
  glucomteryformSubmit(){
    console.log(this.glucomteryForm.value);
    
  }

}
