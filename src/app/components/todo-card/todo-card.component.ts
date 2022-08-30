import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})
export class TodoCardComponent implements OnInit {
  @Input() title: string =
    'delectus aut autem delectus aut autemdelectus aut autem';
  @Input() topic: string = 'design';
  @Input() id?: number;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  loadTodo() {
    this.httpService.isTodoLoaded(true);
  }
}
