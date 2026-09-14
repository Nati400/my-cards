import { Component, Input } from '@angular/core';
import { CardClass } from '../app/card-class';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class CardComp {
  @Input() card!: CardClass;
}