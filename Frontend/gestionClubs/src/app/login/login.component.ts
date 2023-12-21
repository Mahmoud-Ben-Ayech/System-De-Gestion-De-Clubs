import { Component, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { UserserviceService } from '../userservice.service';
import { ResponsableclubService } from '../responsableclub.service';
import { LocalService } from '../local.service';
import { EmailValidator, NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { user } from './user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any={}
  modell: any={}
  user:user =new user();
  getData : boolean | undefined;
  
  constructor(private adminservice :AdminserviceService , private userservice :UserserviceService,
    private responclubservice :ResponsableclubService,private router: Router,private http :HttpClient,
    private localStore:LocalService) {}

  loginAdmin(){
    var email=this.model.email;
    var password=this.model.password;

    this.adminservice.getAdminData(email,password).subscribe((res :any ) =>{
      this.getData=res;

      if(this.getData==true){
        this.router.navigate(["/adminint"]);
      }
    })
  }

  loginUser(){
    var email=this.modell.email;
    var password=this.modell.password;

    this.userservice.getUserData(email,password).subscribe((res :any ) =>{
      this.getData=res;

      if(this.getData==true){
        this.localStore.saveData("email",email);
        this.router.navigate(["/userint"]);
      }
    })
  }
  loginResponClub(){
    var email=this.modell.email;
    var password=this.modell.password;

    this.responclubservice.getResponClubData(email,password).subscribe((res :any ) =>{
      this.getData=res;

      if(this.getData==true){
        this.router.navigate(["/respclubint"]);
      }
    })
  }


  createUser():void{
    // const data={
    //   firstName:this.modell.firstName,
    //   lastName:this.modell.lastName,
    //   email:this.modell.email,
    //   password:this.modell.password
    // };


    // this.userservice.create(data).subscribe(
    //   (response: any) => {
    //     console.log(response);
    //     location.reload();
 
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //     location.reload();
    //   }
    // );
  }

  
  

  createRespClub(){


  }
}
