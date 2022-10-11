import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpserviceService } from '../Http/httpservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpservice: HttpserviceService) { }

  registration(data: any) {
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    console.log("Registration in service", data)
    return this.httpservice.postservice('users/signUp', data, false, httpOptions)
  }
  login(data: any) {
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    console.log("Registration in service", data)
    return this.httpservice.postservice('users/login', data, false, httpOptions)
  }
  forgetPassword(data: any) {
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    console.log("Registration in service", data)
    return this.httpservice.postservice('users/forgetPassword', data, false, httpOptions)
  }

  resetPassword(data: any, resetToken: any) {
    let httpOptions = {
      httpOptions: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    console.log("Registration in service", data)
    return this.httpservice.postservice('users/resetpassword/' + resetToken, data, true, httpOptions)
  }
}
