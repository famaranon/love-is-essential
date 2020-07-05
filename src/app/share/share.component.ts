import { Component, OnInit, OnDestroy } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit, OnDestroy {

  public faTwitter = faTwitter;
  public faFacebook = faFacebook;
  private twitter: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initTwitterWidget();
  }

  ngOnDestroy(): void {
    this.twitter.unsubscribe();
  }

  private initTwitterWidget(): any {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        (window as any).twttr = ( (d, s, id) => {
            let js: any;
            const fjs = d.getElementsByTagName(s)[0];
            const t = (window as any).twttr || {};
            if (d.getElementById(id)) { return t; }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://platform.twitter.com/widgets.js';
            fjs.parentNode.insertBefore(js, fjs);
            t._e = [];
            t.ready =  (f: any) => { t._e.push(f); };
            return t;
        })(document, 'script', 'twitter-wjs');
      }
    });
  }

  public shareOnTwitter(): void {
    window.open('https://twitter.com/intent/tweet?hashtags=LoveIsNotTourism,LoveIsEssential', '_blank');
  }

  public shareOnFacebook(): void {
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=LoveIsNotTourism&p[url]=https://loveisessential.info&p[summary]=LoveIsNotTourism', '_blank');
  }

  public signPetition(): void {
    window.open('http://chng.it/2D6g5dHJGN', '_blank');
  }

}
