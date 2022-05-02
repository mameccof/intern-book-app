import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/types/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() book?: Book;
  @Input() bookNumber?: number;

  @Output() deleteBookEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  sendBookNumber() {
    this.deleteBookEvent.emit(this.bookNumber);
  }

}
