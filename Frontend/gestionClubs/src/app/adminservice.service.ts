import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http : HttpClient ) { }
  getAdminData(email: string,password: string){
     return this.http.get('http://localhost:8081/admin/'+email+'/'+password);

  }
}
