import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFanPage } from './add-fan.page';

describe('AddFanPage', () => {
  let component: AddFanPage;
  let fixture: ComponentFixture<AddFanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
