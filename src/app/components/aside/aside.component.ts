import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
})
export class AsideComponent implements OnInit {
  topics = ['all', 'design', 'finance', 'client work'];
  activeTopic = 'all';
  constructor() {}

  ngOnInit(): void {}

  setActiveTopic(topic: string) {
    this.activeTopic = topic;
  }
}
