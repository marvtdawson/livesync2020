import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs";
import {SiteDataService} from "../../../services/site-data/site-data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input()pageTitle: string;
  dropdown = true;
  accountDropDown = true;
  appName = this.siteData.siteName;
  appLogo = this.siteData.siteLogo;
  isUserLoggedOut$: Observable<boolean>;
  isUserLoggedIn$: Observable<boolean>;
  displayName$: any;

  @ViewChild('eventsBtn', {read: ElementRef}) eventBtn: ElementRef;
  @ViewChild('accountBtn', {read: ElementRef}) accountBtn: ElementRef;

  constructor(private siteData: SiteDataService) { }

  ngOnInit() {}

  hideDropdown(event) {
    const xTouch = (event.clientX).toFixed(2);
    const yTouch = (event.clientY).toFixed(2);

    const rect = this.eventBtn.nativeElement.getBoundingClientRect();
  }

  hideAccountDropdown(event) {}

}
