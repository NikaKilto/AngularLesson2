import { Component } from '@angular/core';
import { CardModel } from './models/card.model';

@Component({
  selector: 'app-card-generator',
  standalone: false,
  templateUrl: './card-generator.html',
  styleUrl: './card-generator.css',
})
export class CardGenerator {
  cardModel: CardModel = new CardModel();
  cardModelToShow!: CardModel;

  clearInpsValBtnClick() {
    this.cardModel = new CardModel();
  }

  addCardBtnClick() {
    this.cardModelToShow = this.cardModel;
  }
}
