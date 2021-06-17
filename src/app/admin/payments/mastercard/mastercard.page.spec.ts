import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MastercardPage } from './mastercard.page';

describe('MastercardPage', () => {
  let component: MastercardPage;
  let fixture: ComponentFixture<MastercardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastercardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MastercardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
