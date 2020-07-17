import { Component, OnInit, OnDestroy } from '@angular/core';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
import { ImageService } from 'src/app/services/image.service';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';


@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit, OnDestroy {

  public faTwitter = faTwitter;
  public faFacebook = faFacebook;
  public faCamera = faCamera;
  public selectedTemplate = 'tourism';
  public selectedAvatarType = 'round';
  private twitter: any;
  private file: File = null;

  constructor(
    private router: Router,
    private imageService: ImageService,
    private googleAnalytics: GoogleAnalyticsService
  ) { }

  ngOnInit(): void {
    this.initTwitterWidget();
  }

  ngOnDestroy(): void {
    this.twitter.unsubscribe();
  }

  public handleFileInput(files: FileList): void {
    this.file = files.item(0);
    this.imageService.getImageData(this.file, this.selectedTemplate, this.selectedAvatarType);
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
    this.googleAnalytics.logEvent('share', 'twitter');
    window.open('https://twitter.com/intent/tweet?url=https%3A%2F%2Floveisessential.info&hashtags=LoveIsEssential%2CLoveIsNotTourism%2CLiftTheTravelBan', '_blank');
  }

  public shareOnFacebook(): void {
    this.googleAnalytics.logEvent('share', 'facebook');
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=LoveIsNotTourism&p[url]=https://loveisessential.info&p[summary]=LoveIsNotTourism', '_blank');
  }

  public signPetition(): void {
    this.googleAnalytics.logEvent('share', 'change');
    window.open('http://chng.it/2D6g5dHJGN', '_blank');
  }

}
