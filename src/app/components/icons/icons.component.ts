import { Component, Input, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard:any

  constructor(private noteservice:NoteserviceService) { }

  ngOnInit(): void {
  }

  trashNotes(){
    this.noteservice.trashNotes(this.noteCard).subscribe((response:any) =>{
      console.log(response)
    },error =>{
      console.log(error);
      
    })
  }
  archiveNotes(){
    this.noteservice.archiveNotes(this.noteCard).subscribe((res:any) =>{
      console.log(res)
    },error =>{
      console.log(error);
      
    })
  }

}
