import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  pageTitle = 'Admin Page';
  loggedInMember = 'Marvin Dawson';

  public adminPages = [
    {
      title: 'Events',
      url: '/admin/events',
      icon: 'mic'
    },
    {
      title: 'Performances',
      url: '/admin/performances',
      icon: 'play'
    },
    {
      title: 'Sets',
      url: '/admin/sets',
      icon: 'musical-notes'
    },
    {
      title: 'Fans',
      url: '/admin/fans',
      icon: 'people'
    },
    {
      title: 'Site Pages',
      url: '/admin/site-pages',
      icon: 'documents'
    },
    {
      title: 'Site Layout',
      url: '/admin/site-layout',
      icon: 'layers'
    },
    {
      title: 'Payment Options',
      url: '/admin/payments',
      icon: 'card'
    },
    {
      title: 'Account',
      url: '/admin/account',
      icon: 'settings'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
