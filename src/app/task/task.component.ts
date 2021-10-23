import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Task } from '../model/Task.interface';

@Component({
  selector: 'app-task',
  template: `
    <div class="task">
      <input type="checkbox" [(ngModel)]="tsk.isDone">
      <span *ngIf="!edit" [ngClass]="{'checked': tsk.isDone}" (click)="onSpanClick()">{{tsk.text}}</span>
      <input *ngIf="edit" type="text" [value]="tsk.text" (blur)="onInputBlur()" #taskInputTxt>
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
@ViewChild('taskInputTxt') taskInputTxt!: ElementRef<HTMLInputElement>;
edit: boolean = false;

  constructor() { 

  }

  onDelete() {
    this.removeMe.emit();
  }

  onSpanClick() {
    this.edit = true;
    setTimeout(() => this.taskInputTxt.nativeElement.focus());
  }

  onInputBlur() {
    this.tsk.text = this.taskInputTxt.nativeElement.value;
    this.edit = false;
  }

}
