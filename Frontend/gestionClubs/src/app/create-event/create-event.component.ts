import { Component, OnInit } from '@angular/core';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent  {
  data:any={}
  id!: any ;
  eventName!: String ;
  organizer!: String ;
  place!: String ;
  attendees!: any ;
  materialsNeeded!: String ;
  eventDate!: String ;

  submitted=false;
  constructor(private eventService:EventserviceService) {}

  saveEvent():void  { 
    const data = {
      id: this.id,
      eventName: this.eventName,
      organizer: this.organizer,
      place: this.place,
      attendees: this.attendees,
      materialsNeeded: this.materialsNeeded,
      eventDate: this.eventDate,
    };
    this.eventService.create(data).subscribe(response =>{
      console.log(response);
      this.submitted=true;
    },
    error =>{
      console.log(error);
    }); 
  }
}


