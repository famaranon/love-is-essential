import { Component, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
declare let gtag: (config: string, tag: string, object: any) => void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Love Is Essential';
  sections = ['petition', 'press', 'share', 'community'];
  activeSection: string;

  constructor(
    private location: Location,
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        gtag('config', 'G-F0P72WVY34', { page_path: event.urlAfterRedirects });
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const anchors = {};
    this.sections.forEach((section) => {
        const element = document.querySelector('#' + section);
        const isInViewport = this.isInViewport(element);
        if (isInViewport) {
          this.activeSection = section;
          const pathWithHash = this.location.path(true);
          if (pathWithHash !== `#${section}` ) {
            this.setNewState(section);
          }
        }
        anchors[section] = isInViewport;
    });
    if (Object.values(anchors).every(anchor => !anchor)) {
      const pathWithHash = this.location.path(true);
      if (pathWithHash !== '') {
        this.activeSection = '';
        this.setNewState();
      }
    }
  }

  public setActiveSection(section): void {
    this.activeSection = section;
    this.setNewState(section);
  }

  private setNewState(section?: string): void {
    const pathWithoutHash = this.location.path(false);
    this.location.replaceState(pathWithoutHash + (section ? `#${section}` : ''));
  }

  private isInViewport(element: Element): boolean {
    const bounding = element.getBoundingClientRect();
    return (bounding.top - 150) <= 0 && (bounding.bottom - 150) > 0;
  }
}
