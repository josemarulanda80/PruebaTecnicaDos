import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/list.item.types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient ) { 
  }
  getUsers():Observable<Users[]>{
     return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users')
  }
}