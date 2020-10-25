import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNoticeNalPage } from './add-notice-nal.page';

describe('AddNoticeNalPage', () => {
  let component: AddNoticeNalPage;
  let fixture: ComponentFixture<AddNoticeNalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNoticeNalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNoticeNalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
