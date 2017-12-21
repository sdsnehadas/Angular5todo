import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../services/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Input() taskList: Task[];
  @Input() showComponent;
  public task = {
    id: '',
    description: '',
    time: ''
  };
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  createTask(task): void {
    var lastElement = this.taskList.slice(-1).pop();
    task.id = lastElement.id ? (lastElement.id + 1) : 1;
    this.taskService.addTask(task)
      .subscribe(task => {
        this.taskList.push(task);
      });
  }

}
