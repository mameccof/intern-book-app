import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
  ) { }

  ngOnInit(): void {
  }

}
