import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todolist: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getToDoList();
  }

  getToDoList() {
    this.todolist = [
    {
      id: 1,
      titel: "Spaetzle Machen",
      status: "Offen",
      beschreibung: "Pressen",
      gewicht: 5,
      zeitpunkt: "28.04.2021",
    },
    {
      id: 2,
      titel: "Ja",
      status: "Genau",
      beschreibung: "Nein",
      gewicht: 2,
      zeitpunkt: "06.09.1969",
    }
    ]
  }
 
}
