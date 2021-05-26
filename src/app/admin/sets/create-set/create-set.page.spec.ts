import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateSetPage } from './create-set.page';

describe('CreateSetPage', () => {
  let component: CreateSetPage;
  let fixture: ComponentFixture<CreateSetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateSetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
