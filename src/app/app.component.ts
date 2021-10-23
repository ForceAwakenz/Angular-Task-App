import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-add-task></app-add-task>
    <hr>
    <app-task-list></app-task-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'task-app';
}
