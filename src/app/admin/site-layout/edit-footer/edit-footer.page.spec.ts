import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditFooterPage } from './edit-footer.page';

describe('EditFooterPage', () => {
  let component: EditFooterPage;
  let fixture: ComponentFixture<EditFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFooterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
