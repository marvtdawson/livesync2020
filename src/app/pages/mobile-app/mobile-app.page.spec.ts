import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileAppPage } from './mobile-app.page';

describe('MobileAppPage', () => {
  let component: MobileAppPage;
  let fixture: ComponentFixture<MobileAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
