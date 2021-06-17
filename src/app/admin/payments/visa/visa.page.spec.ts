import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisaPage } from './visa.page';

describe('VisaPage', () => {
  let component: VisaPage;
  let fixture: ComponentFixture<VisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
