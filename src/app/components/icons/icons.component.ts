import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/Services/NoteService/noteservice.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() noteCard:any
  @Output() refreshNotes = new EventEmitter<any>()

  colorsList = [
    ['white', '#e2725b', '#ffae42','#fefe33', '#77dd77', '#40e0d0'],
    ['#a4dded', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#d3d3d3'],
  ]

  constructor(private noteservice:NoteserviceService) { }

  ngOnInit(): void {
  }

  trashNotes(){
    this.noteservice.trashNotes(this.noteCard._id).subscribe((response:any) =>{
      console.log(response)
      this.refreshNotes.emit(response)
    },error =>{
      console.log(error);
      
    })
  }
  archiveNotes(){
    this.noteservice.archiveNotes(this.noteCard._id).subscribe((res:any) =>{
      console.log(res)
      this.refreshNotes.emit(res)
    },error =>{
      console.log(error);
      
    })
  }

  changeColor(Color:any){
    console.log(Color)
    this.noteCard.Color = Color
    let data = {
      'Color':Color,
      _id:this.noteCard._id
    }
    this.noteservice.updateNotes(data).subscribe((res:any) =>{
      console.log(res);
    },error =>{
      console.log(error);
      
    })
  }
}
