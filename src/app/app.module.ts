import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/in-memory-data.service';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

import {TaskService} from '../services/task.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from '../services/message.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskDetailComponent,
    MessagesComponent,
    
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutingModule,HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [TaskService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
