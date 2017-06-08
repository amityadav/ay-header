import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ay-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class AmitHeaderComponent implements OnInit {
  public headerTitle:any;

  constructor() { }

  ngOnInit() {
    this.headerTitle = 'This is a sample header from Amit Yadav!!!';
  }

}



