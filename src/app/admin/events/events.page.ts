import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

  fanImage1 = '../assets/img/admin/fans/employee_1.jpg';
  fanImage2 = '../assets/img/admin/fans/employee_2.jpg';
  fanImage3 = '../assets/img/admin/fans/employee_5.jpg';
  fan: any;

  fanInfo = [
    {
      name: 'John Davis',
      imgThumbnail: '../assets/img/admin/fans/employee_1.jpg',
      city: 'Dallas',
      attendingStatus: 'Confirmed',
      isOnline: false
    },
    {
      'name': 'Jane Smith',
      'imgThumbnail': '../assets/img/admin/fans/employee_2.jpg',
      'city': 'Dallas',
      'attendingStatus': 'Confirmed',
      'isOnline': true
    },
    {
      'name': 'Kyra Blichubar',
      'imgThumbnail': '../assets/img/admin/fans/employee_5.jpg',
      'city': 'Dallas',
      'attendingStatus': 'Unconfirmed',
      'isOnline': true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
