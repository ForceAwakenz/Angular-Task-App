import { Component, OnInit } from '@angular/core';
import { TaskStorageService } from '../task-storage.service';
import { Task } from '../model/Task.interface';

@Component({
  selector: 'app-add-task',
  template: `
      <!-- <button (click)="makeVisible()" (blur)="inputVisible=false">-></button> -->
      <input *ngIf="inputVisible" type="text" placeholder="Input task" [(ngModel)]="taskText">
      <button (click)="addTask()">+</button>
  `,
  styles: [
  ]
})
export class AddTaskComponent implements OnInit {
  inputVisible = true;
  tasks: Task[];
  taskText: string = '';

  constructor(private taskStorage: TaskStorageService) { 
    this.tasks = taskStorage.tasks;
  }

  ngOnInit(): void {
  }

  // makeVisible() {
  //   this.inputVisible=true;
  // }

  addTask() {
    this.tasks.push({isDone: false, text: this.taskText});
    this.taskText = '';
  }

}
