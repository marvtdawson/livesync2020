import { Component, OnInit } from '@angular/core';
import {MenuController} from "@ionic/angular";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  /* side menu links */
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Performances',
      url: '/performances',
      icon: 'play'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'mic'
    },
    {
      title: 'Features',
      url: '/features',
      icon: 'settings'
    },
    {
      title: 'Pricing',
      url: '/pricing',
      icon: 'cash'
    },
    {
      title: 'Cart',
      url: '/cart',
      icon: 'cart'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'lock-open'
    },
    {
      title: 'Logout',
      url: '/log-out',
      icon: 'lock-closed'
    },
    {
      title: 'Account',
      url: '/admin',
      icon: 'person-circle'
    }
  ];

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  setTitle(title) {

  }

}
