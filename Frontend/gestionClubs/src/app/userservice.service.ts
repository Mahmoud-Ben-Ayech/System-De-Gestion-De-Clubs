import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http : HttpClient) { }

  getUserData(email: string,password: string){
    return this.http.get('http://localhost:8081/user/'+email+'/'+password);
  }

  // create(data :any){
  //   return this.http.post('http://localhost:8081/api/createUser',data);
  // }
}
