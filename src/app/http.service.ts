import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Todo } from '../models';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  todoLoaded = false;
  todoLoadedEvent = new EventEmitter(false);

  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>(`${environment.apiUrl}/todos`);
  }

  isTodoLoaded(val: boolean) {
    this.todoLoadedEvent.subscribe(() => (this.todoLoaded = val));
  }
}
