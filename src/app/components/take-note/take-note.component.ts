import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent implements OnInit {
  createNoteForm:FormGroup
  submitted:false
  open = true

  constructor(private formBuilder:FormBuilder,private noteService:NoteserviceService) { }

  ngOnInit(): void {
    this.createNoteForm = this.formBuilder.group({
      Title:[''],
      Description:['']
    })
  }

  display(){
    this.open = !this.open
  }
  createNote(){
    console.log('its working')
    //console.log('title',this.createNoteForm.value.Title)
    let data = {
      Title:this.createNoteForm.value.Title,
      Description:this.createNoteForm.value.Description,
      Color:'white'
    }
    
    console.log("data",data)
     this.noteService.createNote(data).subscribe((res:any) =>{
      console.log(res)
    },error =>{
      console.log(error);
    })
  }
}
