import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../services/task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  enableEdit: boolean;

  @Input() task: Task;
  constructor(private route: ActivatedRoute,
    private taskService: TaskService,
    private location: Location) {

  }

  ngOnInit() {
    this.getTask();
  }

  getTask(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  editTask(): void {
    this.enableEdit = true;
  }

  updateTask(task): void {
    this.taskService.updateHero(task)
      .subscribe(() => {
        this.enableEdit = false;
        this.goBack()
      }
    );
    
  }

}
