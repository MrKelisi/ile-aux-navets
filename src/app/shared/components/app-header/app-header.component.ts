import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Input() appTitle;
  @Input() appName;
  @Input() appColor;

  constructor() { }

  ngOnInit(): void {
  }

}
