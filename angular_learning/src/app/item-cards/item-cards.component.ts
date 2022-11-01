import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.scss'],
})
export class ItemCardsComponent implements OnInit {
  itemName: string = '';
  itemStatus: string = '';
  constructor() {}

  ngOnInit(): void {}
}
