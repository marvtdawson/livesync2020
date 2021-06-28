import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fans',
  templateUrl: './fans.page.html',
  styleUrls: ['./fans.page.scss'],
})
export class FansPage implements OnInit {

  pageTitle = 'Fans Page';
  fans = [
    {'name': 'Chantel', 'title': 'Property Manager', 'imgThumbnail': '/assets/img/admin/fans/employee_9.jpg', 'isOnline': true},
    {
      'name': 'Carol',
      'title': '1st Shift Office Manager',
      'imgThumbnail': '/assets/img/admin/fans/employee_2.jpg',
      'isOnline': true
    },
    {'name': 'Jasmine',
      'title': '1st Shift Front Desk Admin',
      'imgThumbnail': '/assets/img/admin/fans/employee_5.jpg',
      'isOnline': true},
    {'name': 'Rick', 'title': 'Front Desk Admin', 'imgThumbnail': '/assets/img/admin/fans/employee_3.jpg', 'isOnline': true},
    {'name': 'Na`Kia',
      'title': '2nd Shift Office Manager',
      'imgThumbnail': '/assets/img/admin/fans/employee_6.jpg',
      'isOnline': false},
    {'name': 'Anna', 'title': '2nd Front Desk Admin', 'imgThumbnail': '/assets/img/admin/fans/employee_4.jpg',  'isOnline': false},
    {'name': 'Herald', 'title': 'Air Condition / Electric', 'imgThumbnail': '/assets/img/admin/fans/employee_7.jpg', 'isOnline': true},
    {'name': 'Alex', 'title': 'Maintenance / Paint', 'imgThumbnail': '/assets/img/admin/fans/employee_8.jpg', 'isOnline': true},
    {'name': 'Pete', 'title': 'Grounds', 'imgThumbnail': '/assets/img/admin/fans/employee_10.jpg', 'isOnline': true},
    {'name': 'Dave', 'title': 'Security', 'imgThumbnail': '/assets/img/admin/fans/employee_1.jpg', 'isOnline': true},
    {'name': 'Scott', 'title': '2nd Shift Security', 'imgThumbnail': '/assets/img/admin/fans/employee_3.jpg', 'isOnline': false},

  ];
  constructor() { }

  ngOnInit() {
  }

}
