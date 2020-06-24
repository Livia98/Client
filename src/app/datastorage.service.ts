import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatastorageService {

  constructor(private httpClient: HttpClient) { }

  loadToDoListe(): Observable<any> {
    return this.httpClient.get("http://localhost/todolist/public/todolist");
  }

}
