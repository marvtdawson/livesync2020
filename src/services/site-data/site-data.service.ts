import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {

  siteName = 'Mic Sync';
  siteFooterName = 'Mic Sync LLC';
  siteTagLine = 'Sync your live performances';
  siteLogo = './assets/img/logo/MicrophoneDropArtboard 1JPG.jpg';
  siteKeywords = 'Mic Sync, Mic, Sync, App, Mic Sync App, Application, micsync, micsync.com' +
      'Mobile App, Mobile, Open, Open Mic, Performance, Perform' +
      'Marvin Dawson, Dawson Technical Consulting';
  year: number = new Date().getFullYear();
  constructor() { }
}
