import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApplePayPage } from './apple-pay.page';

describe('ApplePayPage', () => {
  let component: ApplePayPage;
  let fixture: ComponentFixture<ApplePayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplePayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApplePayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
