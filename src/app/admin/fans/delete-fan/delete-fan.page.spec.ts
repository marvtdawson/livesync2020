import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteFanPage } from './delete-fan.page';

describe('DeleteFanPage', () => {
  let component: DeleteFanPage;
  let fixture: ComponentFixture<DeleteFanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteFanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteFanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
