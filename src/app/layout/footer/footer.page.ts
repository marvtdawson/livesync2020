import { Component, OnInit } from '@angular/core';
import {SiteDataService} from "../../../services/site-data/site-data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.page.html',
  styleUrls: ['./footer.page.scss'],
})
export class FooterPage implements OnInit {

  siteName = this.siteData.siteName;
  siteFooterName = this.siteData.siteFooterName;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {
  }

}
