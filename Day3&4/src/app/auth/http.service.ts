import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
fakeApi:string='http://httpstat.us/';
  constructor(private http:HttpClient) { }
  get<T>():Observable<T>{
    return this.http.get<T>(`${this.fakeApi}/200`)
  }
}
