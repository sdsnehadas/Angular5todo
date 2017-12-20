import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MessagesComponent } from './messages/messages.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TodoListComponent },
  // { path: 'tasks', component: TodoListComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  //{path: '**', component: MessagesComponent}
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
