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
  url:string='https://jsonplaceholder.typicode.com/users';

  getUsers():Observable<Users[]>{
     return this.http.get<Users[]>(this.url)
  }

  saveUSer(user:Users):Observable<Users>{
    return this.http.post<Users>(this.url,user)
  }

  editUSer(user:Users,id:string):Observable<Users>{
    return this.http.put<Users>(this.url+id,user)
  }
}