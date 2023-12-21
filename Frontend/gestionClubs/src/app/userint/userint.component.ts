import { Component, OnInit } from '@angular/core';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-userint',
  templateUrl: './userint.component.html',
  styleUrls: ['./userint.component.css']
})
export class UserintComponent implements OnInit {

  email='';

  constructor(private localStore:LocalService) { }
  
  ngOnInit(): void {
    this.email=this.localStore.getData("email");
  }

}
