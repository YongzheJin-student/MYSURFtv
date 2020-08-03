import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LastestPage } from './lastest.page';

describe('LastestPage', () => {
  let component: LastestPage;
  let fixture: ComponentFixture<LastestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LastestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
