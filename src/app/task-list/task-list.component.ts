import { AfterContentChecked, Component } from "@angular/core";
import { Task } from "../model/Task.interface";

@Component({
    selector: 'app-task-list',
    template: `
    <app-task 
        *ngFor="let task of tasks; let indx = index" 
        [tsk]="task" 
        (removeMe)="removeTsk(indx)">
    </app-task>
    `
})

export class TaskListComponent implements AfterContentChecked {
tasks!: Task[];


    constructor() {
        this.tasks = [
            {isDone: false, text: 'Go to shop', },
            {isDone: true, text: 'Watch movie', },
            {isDone: false, text: 'Have some fun', },
        ]
        // this.tasks = JSON.parse(localStorage.getItem('taskBase') || '[]') ; // is it a good decision ? 

    }

    ngAfterContentChecked() {
        // console.log('change')
    }

    removeTsk(i: number) {
        this.tasks.splice(i, 1);
    }

}

