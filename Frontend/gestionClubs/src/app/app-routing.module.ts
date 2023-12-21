import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { AdminintComponent } from './adminint/adminint.component';
import { UserintComponent } from './userint/userint.component';
import { RespclubComponent } from './respclub/respclub.component';

const routes: Routes = [
  {path:'',component: AcceuilComponent},
  {path:'login',component: LoginComponent},
  {path:'adminint',component: AdminintComponent},
  {path:'userint',component: UserintComponent},
  {path:'respclubint',component: RespclubComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
