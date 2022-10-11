import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {
  isAuthenticated() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
 
  getToken(){
    return !!localStorage.getItem('token')
  }
}
