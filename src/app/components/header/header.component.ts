import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SiteDataService} from "../../../services/site-data/site-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  appName = this.siteData.siteName;
  appLogo = this.siteData.siteLogo;
  isUserLoggedOut$: Observable<boolean>;
  isUserLoggedIn$: Observable<boolean>;
  displayName$: any;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {}

}
