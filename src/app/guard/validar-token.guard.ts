import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  constructor(private authService:AuthService){

  }
  canActivate():Observable<boolean>|boolean{
    console.log('canActivate')
    return true;
  }
  canLoad():Observable<boolean>|boolean{
    console.log('canLoad')
    return true;
  }
}
