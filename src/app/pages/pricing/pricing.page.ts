import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.page.html',
  styleUrls: ['./pricing.page.scss'],
})
export class PricingPage implements OnInit {

  pageTitle = 'Pricing Page';
  card_one_image = '/assets/img/nat-4.jpg';
  card_two_image = '/assets/img/nat-5.jpg';
  card_three_image = '/assets/img/nat-6.jpg';
  card_four_image = '/assets/img/nat-7.jpg';
  constructor() { }

  ngOnInit() {
  }

}
