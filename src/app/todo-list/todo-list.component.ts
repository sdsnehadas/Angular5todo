import { Component, OnInit } from '@angular/core';
import { Task } from '../../services/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  taskList: Task[];


  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTaskList()
  }

  getTaskList(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.taskList = tasks);
  }

  addTask() : void {
    
  }

}
