import { Component, OnInit } from '@angular/core';

// Imports Models
import { TaskItem } from './../models/task-item';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  // Contains all the tasks and their respective data
  taskList: TaskItem[] = [];
  // Value holding the user input for a new task
  newTaskDescription: string = "";

  constructor() {}

  ngOnInit(): void {
    this.initializeDummyTasks()
  }

  // Testing: Display some dummy tasks on startup
  initializeDummyTasks() {
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

  // Add a task on top of the list via index 0
  addTask() {
    this.taskList.splice(0, 0, {
      description: this.newTaskDescription,
      completed: false
    });
    this.newTaskDescription = "";
  }

}
