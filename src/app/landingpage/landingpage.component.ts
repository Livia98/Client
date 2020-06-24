import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
