import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { AvisComponent } from './avis/avis.component';
import { ClubsComponent } from './clubs/clubs.component';
import { ContactComponent } from './contact/contact.component';
import { EvenementComponent } from './evenement/evenement.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserintComponent } from './userint/userint.component';
import { AdminintComponent } from './adminint/adminint.component';
import { Nav1Component } from './nav1/nav1.component';
import { Nav2Component } from './nav2/nav2.component';
import { RespclubComponent } from './respclub/respclub.component';
import { HttpClientModule} from '@angular/common/http';
import { CreateEventComponent } from './create-event/create-event.component';
import { ManageeventComponent } from './manageevent/manageevent.component';
import { EventlistComponent } from './eventlist/eventlist.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AcceuilComponent,
    AproposComponent,
    AvisComponent,
    ClubsComponent,
    ContactComponent,
    EvenementComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    UserintComponent,
    AdminintComponent,
    Nav1Component,
    Nav2Component,
    RespclubComponent,
    CreateEventComponent,
    ManageeventComponent,
    EventlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
