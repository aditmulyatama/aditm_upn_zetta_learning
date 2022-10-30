import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  allowNewCards: boolean = false;
  cardsId: number = 1;
  cardsStatus: string = 'Available';
  cardsCreationStatus: string = 'No cards was created';
  cardName: string = '';
  cardCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewCards = true;
    }, 2000);
  }
  getCardsStatus() {
    return this.cardsStatus;
  }

  ngOnInit(): void {}

  onCreateCards() {
    this.cardCreated = true;
    this.cardsCreationStatus = this.cardName;
  }

  onUpdateCardsName(event: any) {
    this.cardName = event.target.value;
  }
}
