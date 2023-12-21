import { Component, OnInit } from '@angular/core';
import { Events } from './events';
import { EventserviceService } from '../eventservice.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {
  events?: Events[];
  currentEvent?: Events;
  currentIndex = -1;
  data:any={};
  eventName = '';
  id!:any;
  nomEvent!:String;
  email!:String;
  username:any;

  constructor(private eventService: EventserviceService,private localStore:LocalService) { }

  ngOnInit(): void {
   
    this.retrieveEvents();
  }

  retrieveEvents(): void {
    this.eventService.getAll()
      .subscribe(
        data => {
          this.events = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveEvents();
    this.currentEvent = undefined;
    this.currentIndex = -1;
  }

  setActiveEvent(even: Events, index: number): void {
    this.currentEvent = even;
    this.currentIndex = index;
  }
  
  joinEvent(nameEvent:String){
    // this.email=this.localStore.getData("email");
    const data={
      id:this.id,
      nomEvent:nameEvent,
      email:this.username
    };
   this.eventService.createJoin(data).subscribe(response =>{
    console.log(response);
  },
  error =>{
    console.log(error);
  }); 
  }

 } 
