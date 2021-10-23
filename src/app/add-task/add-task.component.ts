import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  template: `
      <button (click)="makeVisible()" (blur)="inputVisible=false">+</button>
      <input *ngIf="inputVisible" type="text" placeholder="Input task" (click)="makeVisible()">
  `,
  styles: [
  ]
})
export class AddTaskComponent implements OnInit {
  inputVisible = false;

  constructor() { }

  ngOnInit(): void {
  }

  makeVisible() {
    this.inputVisible=true;
  }

}
