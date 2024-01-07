import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';

const appRoutes: Routes = [
  {path: '', component: TasksComponent}
];

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    HeaderComponent,
    TasksComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {}