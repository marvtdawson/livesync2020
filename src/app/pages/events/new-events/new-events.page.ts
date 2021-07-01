import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-events',
  templateUrl: './new-events.page.html',
  styleUrls: ['./new-events.page.scss'],
})
export class NewEventsPage implements OnInit {

  pageTitle = 'New Events';
  constructor() { }

  ngOnInit() {
  }

}
