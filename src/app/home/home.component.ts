import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Huy Nguyễn';
  public age = 25;

  constructor() {}

  ngOnInit(): void {}

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

  public themvao(): void {
    console.log('themvao');
    this.name = 'ahihi';
  }
}
