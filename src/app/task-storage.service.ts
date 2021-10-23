import { Task } from "./model/Task.interface";

export class TaskStorageService {

  tasks: Task[];

  constructor() {
    this.tasks = JSON.parse(localStorage.getItem('taskBase') || '[]') ; // is it a good decision ? 
  }

  // writeStorage() {

  // }

}
