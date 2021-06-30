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
  accountDropDown = false;
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
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.eventBtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundary = rect.top + 2;
    const rightBoundary = rect.top + 2;

    if(xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }

}
