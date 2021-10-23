import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/Task.interface';

@Component({
  selector: 'app-task',
  template: `
    <div class="task">
      <input type="checkbox" [(ngModel)]="tsk.isDone">
      <span [ngClass]="{'checked': tsk.isDone}" >{{tsk.text}}</span>
      <button (click)="onDelete()" >X</button>
    </div>
  `,
  styles: [
    `
    .checked {
      text-decoration: line-through;
      color: #777;
    }
    `
  ]
})
export class TaskComponent {
@Input() tsk!: Task;
@Output() removeMe = new EventEmitter();

  constructor() { 

  }

  onDelete() {
    this.removeMe.emit;
  }

}
