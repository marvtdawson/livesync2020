import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviousEventsPage } from './previous-events.page';

describe('PreviousEventsPage', () => {
  let component: PreviousEventsPage;
  let fixture: ComponentFixture<PreviousEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousEventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviousEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
