import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent implements OnInit {

  @Input() description: string = "Default task description";
  @Input() completed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
