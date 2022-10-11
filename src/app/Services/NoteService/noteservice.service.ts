import { Injectable } from '@angular/core';
import { HttpserviceService } from '../Http/httpservice.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteserviceService {
  token:any;

  constructor(private httpservice:HttpserviceService) {
    this.token = localStorage.getItem('token')
   }

  createNote(data:any){
    console.log("data",data)
    console.log("token--->>",this.token);
    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer '+this.token
      })
    }
    return this.httpservice.postservice('userNotes',data,true,httpOptions)
  }
  getAllNotes(){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpservice.getservice('userNotes',true,httpOptions)
  }
  updateNotes(data:any){
    console.log("data",data)    
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer '+this.token
      })
    }
    return this.httpservice.putservice('userNotes/'+data._id,data,true,httpOptions)
  }
  trashNotes(_id:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer '+this.token
      })
    }
    return this.httpservice.putservice(`userNotes/${_id}/isDelete`,null,true,httpOptions)
  }
  archiveNotes(_id:any){
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':  'Bearer '+this.token
      })
    }
    return this.httpservice.putservice(`userNotes/${_id}/isArchive`,null,true,httpOptions)
  }
}
