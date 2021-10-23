import { AfterContentChecked, Component } from "@angular/core";
import { Task } from "../model/Task.interface";
import { TaskStorageService } from "../task-storage.service";


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
tasks: Task[];


    constructor(private storageService: TaskStorageService) {
        this.tasks = storageService.tasks;
    }

    ngAfterContentChecked() {
        localStorage.setItem('taskBase', JSON.stringify(this.tasks))
    }

    removeTsk(i: number) {
        this.tasks.splice(i, 1);
    }

}

