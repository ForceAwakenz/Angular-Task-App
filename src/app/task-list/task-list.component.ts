import { Component, OnInit } from "@angular/core";
import { Task } from "../model/Task.interface";

@Component({
    selector: 'app-task-list',
    template: `
    <app-task *ngFor="let task of tasks" [tsk]="task"></app-task>
    
    `
})

export class TaskListComponent {
tasks!: Task[];


constructor() {
    this.tasks = [
        {isDone: false, text: 'Go to shop', },
        {isDone: true, text: 'Watch movie', },
        {isDone: false, text: 'Have some fun', },
    ]
    // this.tasks = JSON.parse(localStorage.getItem('taskBase') || '[]') ; // is it a good decision ? 
}


}