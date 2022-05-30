import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/types/types';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book?: Book;
  @Input() bookNumber?: number;

  @Output() deleteBookEvent = new EventEmitter<number>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  sendBookNumber() {
    this.deleteBookEvent.emit(this.bookNumber);
  }

  openDialogue(){
    const dialogRef = this.dialog.open(DialogueComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(isDelete => {
      if(isDelete){
        this.sendBookNumber()
      }
    });
  }

}
