import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage implements OnInit {
  stripeLogo = '../assets/img/site/creditCardCompanies/stripe.jpeg';
  visaLogo = '../assets/img/site/creditCardCompanies/visa_logo_2005.png';
  mastercardLogo = '../assets/img/site/creditCardCompanies/Mastercard_new_logo-1200x865.jpg';
  paypalLogo = '../assets/img/site/creditCardCompanies/paypal.jpeg';
  applePayLogo = '../assets/img/site/creditCardCompanies/apple-pay.png';
  googlePayLogo = '../assets/img/site/creditCardCompanies/google-pay.png';
  public  paymentCompanies = [
    {
      companyName: 'Stripe Payment System',
      companyURL: `https://www.stripe.com`,
      paymentType: 'Credit Card',
      imageUrl: `${this.stripeLogo}`,
      linkUrl: 'admin/payments/stripe',
      cardCompanyInfo: 'Stripe API'
    },
    {
      companyName: 'Visa Payment System',
      companyURL: `https://www.visa.com`,
      paymentType: 'Credit Card',
      imageUrl: this.visaLogo,
      linkUrl: 'admin/payments/visa',
      cardCompanyInfo: 'Visa API'
    },
    {
      companyName: 'PayPal Payment System',
      companyURL: `https://www.paypal.com`,
      paymentType: 'Credit Card',
      imageUrl: this.paypalLogo,
      linkUrl: 'admin/payments/pay-pal',
      cardCompanyInfo: 'PayPal API'
    },
    {
      companyName: 'MasterCard Payment System',
      companyURL: `https://www.mastercard.com`,
      paymentType: 'Credit Card',
      imageUrl: this.mastercardLogo,
      linkUrl: 'admin/payments/mastercard',
      cardCompanyInfo: 'MasterCard API'
    },
    {
      companyName: 'Google Payment System',
      companyURL: `https://www.googlepay.com`,
      paymentType: 'Credit Card',
      imageUrl: this.googlePayLogo,
      linkUrl: 'admin/payments/google-pay',
      cardCompanyInfo: 'Google-Pay API'
    },
    {
      companyName: 'Apple-Pay Payment System',
      companyURL: `https://www.applepay.com`,
      paymentType: 'Credit Card',
      imageUrl: this.applePayLogo,
      linkUrl: 'admin/payments/apple-pay',
      cardCompanyInfo: 'Apple-Pay API'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
