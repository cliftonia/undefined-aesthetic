import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-begin-page',
  templateUrl: './begin-page.component.html',
  styleUrls: ['./begin-page.component.scss']
})
export class BeginPageComponent implements OnInit {
  noMsg: string;

  constructor() { }

  handleNo(): void {
    this.noMsg = 'you suck';
  }

  ngOnInit(): void {
  }

}
