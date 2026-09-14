import { Component } from '@angular/core';
import { CardClass } from './card-class';
import { CardComp } from '../card/card';

@Component({
  selector: 'app-root',
  imports: [CardComp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cards: CardClass[] = [
    new CardClass(
      'David Ben-Gurion',
      'https://commons.wikimedia.org/wiki/Special:FilePath/David_Ben_Gurion.jpg',
      '16 October 1886',
      '1 December 1973',
      '1948-1954, 1955-1963',
      "Israel's first Prime Minister"
    ),

    new CardClass(
      'Levi Eshkol',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Portrait_of_prime_minister_Levy_Eshkol._August_1963._D699-070.jpg',
      '25 October 1895',
      '26 February 1969',
      '1963-1969',
      'Prime Minister during the Six-Day War'
    ),

    new CardClass(
      'Golda Meir',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Golda_Meir.jpg',
      '3 May 1898',
      '8 December 1978',
      '1969-1974',
      "Israel's first female Prime Minister"
    ),

    new CardClass(
      'Yitzhak Rabin',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Yizhak_Rabin_(00310004).jpg',
      '1 March 1922',
      '4 November 1995',
      '1974-1977, 1992-1995',
      'Signed the Oslo Accords'
    ),

    new CardClass(
      'Menachem Begin',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Menachem_Begin.jpg',
      '16 August 1913',
      '9 March 1992',
      '1977-1983',
      'Signed the Egypt-Israel Peace Treaty'
    )
  ];
}