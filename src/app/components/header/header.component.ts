import { Component, OnInit } from '@angular/core';
import { status } from 'src/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  status: status = 'ALL';
  constructor() {}

  ngOnInit(): void {}

  toggleStatus(val: status) {
    this.status = val;
    console.log(val);
  }
}
