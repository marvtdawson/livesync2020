import { Component, OnInit } from '@angular/core';
import {SiteDataService} from "../../../services/site-data/site-data.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  siteName = this.siteData.siteName;
  siteFooterName = this.siteData.siteFooterName;
  date = this.siteData.year;
  constructor(private siteData: SiteDataService) { }

  ngOnInit() {}

  subscribe() {}

}
