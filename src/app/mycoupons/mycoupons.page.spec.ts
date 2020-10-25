import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MycouponsPage } from './mycoupons.page';

describe('MycouponsPage', () => {
  let component: MycouponsPage;
  let fixture: ComponentFixture<MycouponsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycouponsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MycouponsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
