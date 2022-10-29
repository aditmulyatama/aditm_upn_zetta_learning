import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  allowNewCards = false;

  constructor() {
    setTimeout(() => {
      this.allowNewCards = true;
    }, 2000);
  }

  ngOnInit(): void {}
}
