import { Component, OnInit } from '@angular/core';

// Imports Models
import { TaskItem } from './../models/task-item';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {

  title: string = "Test Title";
  todoItem: string = "I'm a todo item!";
  test: string = "Test stuff"
  todoItemsList: string[] = [];

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

    this.title = "Test title changed in ngOnInit";
  }

  // REMOVE THIS FUNCTION
  updateList() {
    this.todoItemsList.push(this.todoItem);
    this.todoItem = "";
  }

  addTask() {
    this.taskList.splice(0, 0, {
      description: this.newTaskDescription,
      completed: false
    });
    this.newTaskDescription = "";
  }

}
