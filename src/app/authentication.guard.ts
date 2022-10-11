import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './Services/Authguard/authguard-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private auth:AuthguardServiceService,private router:Router){}
  canActivate():boolean {
      if (!this.auth.getToken()) {
        this.router.navigateByUrl('/login');
      }
      return this.auth.getToken()
  }  
}
