import { AfterViewChecked, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Task } from '../model/Task.interface';

@Component({
  selector: 'app-task',
  template: `
    <div class="task">
      <!-- <input type="checkbox" (change)="tsk.isDone = !tsk.isDone" [checked]="tsk.isDone"> -->
      <input type="checkbox" [(ngModel)]="tsk.isDone">
      <span [ngClass]="{'checked': tsk.isDone}" >{{tsk.text}}</span>
      <button>X</button>
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
export class TaskComponent implements OnInit, AfterViewChecked {
@Input() tsk!: Task;

  constructor() { 

  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    console.log('changes')
  }



}
