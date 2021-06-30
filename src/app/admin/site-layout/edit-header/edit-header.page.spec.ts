import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditHeaderPage } from './edit-header.page';

describe('EditHeaderPage', () => {
  let component: EditHeaderPage;
  let fixture: ComponentFixture<EditHeaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHeaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditHeaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
