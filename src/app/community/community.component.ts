import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent {

  constructor() { }

  public goToFacebook(): void {
    window.open('https://www.facebook.com/hashtag/loveisessential');
  }

  public goToTwitter(): void {
    window.open('https://twitter.com/search?q=loveisnottourism%20OR%20loveisessential%20OR%20liftthetravelban&src=typed_query', '_blank');
  }

  public goToLINT(): void {
    window.open('https://loveisnottourism.org');
  }

}
