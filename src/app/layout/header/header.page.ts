import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SiteDataService} from "../../../services/site-data/site-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
})
export class HeaderPage implements OnInit {

  appName = this.siteData.siteName;
  appLogo = this.siteData.siteLogo;
  isUserLoggedOut$: Observable<boolean>;
  isUserLoggedIn$: Observable<boolean>;
  displayName$: any;

  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
