import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  BaseUrl = environment.baseUrl

  constructor(private httpClient:HttpClient) { }

  postservice(url:string,data:any,token:boolean,httpOptions:any){
    return this.httpClient.post(this.BaseUrl + url, data, token && httpOptions)
  }
  getservice(url:string,token:boolean,httpOptions:any){
    return this.httpClient.get(this.BaseUrl + url,token && httpOptions)
  }
  putservice(url:string,data:any,token:boolean,httpOptions:any){
    return this.httpClient.put(this.BaseUrl + url,data,token && httpOptions)
  }
}
