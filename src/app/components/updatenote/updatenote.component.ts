import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  notesArray:any
  title:any
  description:any
  id: any;
  notesList:any
  @Output() NotesUpdate = new EventEmitter<any>()

  constructor(
    private noteservice:NoteserviceService,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data)
    this.title = data.Title
    this.description = data.Description
    this.id = data._id
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  updateNotes(){
    let note = {
      Title:this.title,
      Description:this.description,
      _id:this.id
    }
    this.noteservice.updateNotes(note).subscribe((res:any) =>{
      console.log(res)
      this.NotesUpdate.emit(res)
    },error =>{
      console.log(error)
    })
  }
 
}

