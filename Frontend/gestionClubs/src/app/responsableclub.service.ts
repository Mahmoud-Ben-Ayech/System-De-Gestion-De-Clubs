import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableclubService {

  constructor(private http : HttpClient) { }

  getResponClubData(email: string,password: string){
    return this.http.get('http://localhost:8081/responsableclub/'+email+'/'+password);
}
}
