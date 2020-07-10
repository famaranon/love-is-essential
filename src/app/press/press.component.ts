import { Component } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent {

  public slideConfig = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3}
      },
      {
        breakpoint: 800,
        settings: { slidesToShow: 2, slidesToScroll: 2 }
      },
      {
        breakpoint: 550,
        settings: { slidesToShow: 1, slidesToScroll: 1, arrows: false }
      }
    ]
  };

  public articles = [
    {
      image: '../../assets/thenewyorktimes.jpg',
      quote: '\"As some restrictions are lifted on who can enter, unmarried couples are calling on European countries to make it possible for them to be together again.\"',
      url: 'https://www.nytimes.com/2020/07/08/world/europe/couples-separated-eu-travel-ban.html?smid=tw-nytimes&smtyp=cur',
      alt: 'The New York Times'
    },
    {
      image: '../../assets/forbes.png',
      quote: '\"Thousands of people feel they’re being deprived of their basic rights to love through the Covid crisis. Now there is some hope at the end of months-long tunnels for them.\"',
      url: 'https://www.forbes.com/sites/tamarathiessen/2020/07/06/europe-travel-ban-eu-wants-us-lovers-couples-exempt/#754b71f04c94',
      alt: 'Forbes'
    },
    {
      image: '../../assets/elpais.svg',
      quote: '\"Cumpleaños y aniversarios ante la pantalla. Viajes indefinidamente aplazados. Bodas con nueva fecha por fijar. Partos sin el padre presente. Convalecencias sin él ni ella haciendo guardia en el sillón.\"',
      url: 'https://elpais.com/sociedad/2020-07-05/el-tiempo-corre-para-miles-de-parejas-separadas-por-la-pandemia.html',
      alt: 'El País'
    },
    {
      image: '../../assets/huffpost.png',
      quote: '\"Much of the EU’s reopening has focused on boosting the bloc’s massive tourism industry, so distinguishing family and relationship travel from vacations and business trips has been a point of the campaign.\"',
      url: 'https://www.huffpost.com/entry/european-union-united-states-travel-ban-long-term-partners_l_5f03b51ec5b6db596745d7e5',
      alt: 'HUFFPOST'
    },
    {
      image: '../../assets/bild.svg',
      quote: '\"Dänemark gehe hier beispielhaft voran. Möglich sei beispielsweise ein negatives Testergebnis sowie ein zusätzlicher Schnelltest bei der Ankunft.\"',
      url: 'https://www.bild.de/politik/inland/politik-inland/corona-verhindert-ihr-wiedersehen-binationale-paare-bitten-politik-um-hilfe-71579336.bild.html',
      alt: 'Bild'

    },
    {
      image: '../../assets/lavanguardia.svg',
      quote: '\"Mientras en muchos países en Europa, tras casi cuatro meses de cuarentena, se puede hacer turismo y cruzar fronteras, la realidad de las parejas que se dividen entre Latinoamérica y Europa es otra.\"',
      url: 'https://www.lavanguardia.com/vida/20200706/482151326258/amor-que-no-atraviesa-fronteras.html',
      alt: 'La Vanguardia'
    }
  ];

  constructor() { }

  goToArticle(url): void {
    window.open(url, '_blank');
  }

}
