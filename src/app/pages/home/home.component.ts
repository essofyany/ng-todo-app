import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Todo } from 'src/models';
import { randomTopic } from 'src/utils/randomTopic';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getTodos()
      .pipe(
        map((res) => {
          return res.slice(0, 12);
        }),
        map((res) => {
          return res.map((item) => ({ ...item, topic: randomTopic() }));
        })
      )
      .subscribe((res) => {
        this.todos = res;
      });
  }
}
