import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteSetPage } from './delete-set.page';

describe('DeleteSetPage', () => {
  let component: DeleteSetPage;
  let fixture: ComponentFixture<DeleteSetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
