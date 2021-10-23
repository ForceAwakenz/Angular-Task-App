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
        this.tasks = JSON.parse(localStorage.getItem('taskBase') || '[]') ; // is it a good decision ? 
    }

    ngAfterContentChecked() {
        localStorage.setItem('taskBase', JSON.stringify(this.tasks))
    }

    removeTsk(i: number) {
        this.tasks.splice(i, 1);
    }

}

