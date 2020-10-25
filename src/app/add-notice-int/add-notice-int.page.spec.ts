import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNoticeIntPage } from './add-notice-int.page';

describe('AddNoticeIntPage', () => {
  let component: AddNoticeIntPage;
  let fixture: ComponentFixture<AddNoticeIntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoticeIntPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNoticeIntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
