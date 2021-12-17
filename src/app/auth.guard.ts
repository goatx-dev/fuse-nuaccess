import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isConnected: any;
  isLoggedIn: any;

  constructor(
    public router: Router
  ){ }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (localStorage.getItem('uid')===null) {
          this.router.navigate(['/v'])  
      } else {
        if (localStorage.getItem('uid')==""||localStorage.getItem('uid')!="0") {
          this.router.navigate(['/v'])
        }
      }
    return true;
  }
}