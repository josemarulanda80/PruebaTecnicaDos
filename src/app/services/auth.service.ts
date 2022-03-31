import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from "../interfaces/user.type";
import { catchError, map, tap } from "rxjs/operators";
import { authResponse } from '../interfaces/authResponse.types';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string=environment.baseUrl;


  private _authenticatedUser: User = {
    active: true,
    lastName: "Apellido",
    secondLastName: "Apellido 2",
    createDate: new Date(),
    id: 1,
    secondName: "Nombre 2",
    firstName: "Nombre"
  };

  constructor(private http: HttpClient) {
  }

  
  public login(email:string,password:string){
    const body={email,password}
    return this.http.post<authResponse>(this.baseUrl,body)
    .pipe(
      tap( resp=>{
        if(resp){
          localStorage.setItem('token',resp.token);
        }
      }),
      map (resp => true),
      catchError(err=>of(err.error.msg))

    )
    
  }

  public getNames(names: {firstName?: boolean, secondName?: boolean, lastName?: boolean, secondLastName?: boolean}){
    // tslint:disable-next-line:prefer-const
    let output = [];
    if(names.firstName){
      output.push(AuthService.validateName(this._authenticatedUser.firstName));
    }
    if(names.secondName){
      output.push(AuthService.validateName(this._authenticatedUser.secondName));
    }
    if(names.lastName){
      output.push(AuthService.validateName(this._authenticatedUser.lastName));
    }
    if(names.secondLastName){
      output.push(AuthService.validateName(this._authenticatedUser.secondLastName));
    }
    return output.join(" ");
  }

  private static validateName(name: string){
    if(!name || name === "null" || name === "undefined"){
      return "";
    }
    return name;
  }
}
