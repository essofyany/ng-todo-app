import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Todo } from 'src/models';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  list = Array.from(Array(10));
  todos: Todo[] = [];
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .getTodos()
      .pipe(
        map((res) => {
          return res
            .map((item) => ({ ...item, title: '12 ' + item.title }))
            .slice(0, 10);
        })
      )
      .subscribe((res) => {
        this.todos = res;
      });
  }
}
