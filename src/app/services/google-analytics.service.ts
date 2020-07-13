import { Injectable } from '@angular/core';
declare let gtag: (config: string, tag: string, object: any) => void;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  public logEvent( action: string, category: string, label: string = null, value: any = null ): void {
    const eventObject = {
      event_category: category,
      event_label: label,
      value
    };
    gtag('event', action, eventObject);
  }
}
