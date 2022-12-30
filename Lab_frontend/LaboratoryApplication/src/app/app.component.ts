import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LaboratoryApplication';
  isAdmin = false;
  isLoggedIn = false;


  logout(){
    console.log("logged out button clicked");
    
  }

  activate(val: boolean){ 
    console.log(val);
    // if(component instanceof LoginComponent){
    //   if()
    // }
    if(val){
      this.isAdmin = true;
    }
    this.isLoggedIn = true;
  }
  
  deactivate(){
    console.log("yes");
    
  }

}
