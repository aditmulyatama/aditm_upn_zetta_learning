import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-cards',
  templateUrl: './item-cards.component.html',
  styleUrls: ['./item-cards.component.scss'],
})
export class ItemCardsComponent implements OnInit {
  @Input() items: { itemName: string; itemStatus: string };

  newItemStatus: string = '';
  constructor() {}

  ngOnInit(): void {}

  changeItemStatus() {
    if (this.items.itemStatus === 'Good') {
    }
  }
}
