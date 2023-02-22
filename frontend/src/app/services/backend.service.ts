import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  //id = '63f55da13a3e6df039d8abb1';
  constructor(private http: HttpClient) { }

  getDishes(): Observable<any>{
    return this.http.get('http://localhost:3000/dishes');
  }
  
 // /order/:id
  getOrder(id: string): Observable<any>{
    return this.http.get('http://localhost:3000/order/'+id);
  }

  addOrder(id: string, order: any): Observable<any>{
    return this.http.post('http://localhost:3000/order/'+id, order);
  }
}
