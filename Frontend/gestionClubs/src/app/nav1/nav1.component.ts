import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav1',
  templateUrl: './nav1.component.html',
  styleUrls: ['./nav1.component.css']
})
export class Nav1Component  {
  constructor(private router: Router){}
  gotoItems(){
    console.log();
    this.router.navigate(['/']);
  }
}
