import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Live Sync';
  siteFooterName = 'Live Sync LLC';
  siteTagLine = 'Sync your live performances';
  siteLogo = './assets/img/logo/temp_logo.jpg';
  siteKeywords = 'Live Sync, Live, Sync, App, Live Sync App, Application' +
      'Mobile App, Mobile, Open, Mic, Open Mic, Performance, Perform' +
      'Marvin Dawson, Dawson Technical Consulting';
  year: number = new Date().getFullYear();
  constructor() { }
}
