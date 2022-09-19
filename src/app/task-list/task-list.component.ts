import { Component, OnInit } from '@angular/core';

// Imports Models
import { TaskItem } from './../models/task-item';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  taskList: TaskItem[] = [];
  newTaskDescription: string = "";

  constructor() {}

  ngOnInit(): void {

    this.taskList = [
      {
        description: "Description 1",
        completed: false
      },
      {
        description: "Description 2",
        completed: true
      },
      {
        description: "Description 3",
        completed: false
      }
    ]
  }

  addTask() {
    this.taskList.splice(0, 0, {
      description: this.newTaskDescription,
      completed: false
    });
    this.newTaskDescription = "";
  }

}
