import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  constructor(private authService:AuthService, private router:Router){

  }
  // Active route user authorized
  canActivate():Observable<boolean>|boolean{
    console.log('canActivate')
   return this.authService.validToken()
   .pipe(
     tap(valid =>{
      
       if(!valid){
         this.router.navigateByUrl('login/')
       }
     })
   )
   

  }
  canLoad():Observable<boolean>|boolean{
    console.log('canLoad')
   return this.authService.validToken()
   .pipe(
    tap(valid =>{
      if(!valid){
        this.router.navigateByUrl('login/');
      }
    })
  )
  }
}
