import { Component, OnInit } from '@angular/core';
import { DatastorageService } from 'src/app/datastorage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: any[] = [];

  constructor(public ds: DatastorageService) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  getToDoList() {
    this.ds.loadToDoListe().subscribe(data => {
      this.todolist = data;
      console.log(this.todolist);
    });
  }
 
}
