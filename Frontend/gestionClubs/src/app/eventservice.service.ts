import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from './eventlist/events';

const creationUrl='http://localhost:8081/api/creation';
const deleteUrl='http://localhost:8081/api/delete';
const updateUrl='http://localhost:8081/api/update';
const getUrl='http://localhost:8081/api/events';
const createJoinUrl='http://localhost:8081/api/createEventjoin';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {

  constructor(private http: HttpClient) { }

  create(data:any):Observable<any>{
    return this.http.post(creationUrl,data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${deleteUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${updateUrl}/${id}`, data);
  }

  getAll() :Observable<any>{
    return this.http.get<Event[]>(getUrl);

  }

  createJoin(data:any):Observable<any>{
    return this.http.post(createJoinUrl,data);
  }

}
