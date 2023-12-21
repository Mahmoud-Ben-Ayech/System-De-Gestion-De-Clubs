import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }
  saveData(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  getData(key: string): any {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }
  
  public removeData(key: string) {
    localStorage.removeItem(key);
  }

  public clearData() {
    localStorage.clear();
  }
}
