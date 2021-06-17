import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GooglePayPage } from './google-pay.page';

describe('GooglePayPage', () => {
  let component: GooglePayPage;
  let fixture: ComponentFixture<GooglePayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GooglePayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
