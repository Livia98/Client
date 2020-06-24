import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  lever = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  showRegistration() {
    this.lever = !this.lever;
  }

  checkInputs(){

  }
}
