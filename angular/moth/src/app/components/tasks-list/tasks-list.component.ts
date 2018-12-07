import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/model/task';
import {TasksService} from '../../services/tasks.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: BehaviorSubject<Task[]>;

  constructor(public tasksService: TasksService) {
  }

  ngOnInit() {
    this.tasks = this.tasksService.getTasks();
  }

  onChange(task: Task) {
    task.isDone = !task.isDone;
    this.tasksService.updateTask(task);
  }
}
