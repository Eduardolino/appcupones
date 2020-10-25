import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoticeIPage } from './notice-i.page';

describe('NoticeIPage', () => {
  let component: NoticeIPage;
  let fixture: ComponentFixture<NoticeIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeIPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticeIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
