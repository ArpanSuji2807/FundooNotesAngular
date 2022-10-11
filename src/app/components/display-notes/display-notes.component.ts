import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() NotesList:any
  note:any
  
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(noteObj:any): void {
    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      width: '450px',
      height:'150px',
      data: noteObj,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
