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
  nestedPage = false;
  isLoading: boolean = false;
  todos: Todo[] = [];
  list = Array.from(Array(10));

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.nestedPage = this.httpService.todoLoaded
    this.isLoading = true;
    this.httpService
      .getTodos()
      .pipe(
        map((res) => {
          return res.slice(0, 10);
        }),
        map((res) => {
          return res.map((item) => ({ ...item, topic: randomTopic() }));
        })
      )
      .subscribe({
        next: (res) => {
          this.todos = res;
        },
      });
    this.isLoading = false;
  }

  toggleNestedPage() {
    this.nestedPage = !this.nestedPage;
  }
}
