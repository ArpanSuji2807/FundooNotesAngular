import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit { 
notesArray:any
notesList:any

 constructor(private noteService:NoteserviceService) {  }

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes(){
    this.noteService.getAllNotes().subscribe((res:any) =>{
      console.log(res)
      this.notesArray = res.data;
      this.notesArray.reverse();
      this.notesList = this.notesArray.filter((note:any) =>{
        return note.isDeleted == false && note.isArchived == false;
      })
      console.log("notes-->>",this.notesList);
      
    },(error:any) =>{
      console.log(error)
    })
  }
}
