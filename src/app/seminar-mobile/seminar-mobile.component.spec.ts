import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarMobileComponent } from './seminar-mobile.component';

describe('SeminarMobileComponent', () => {
  let component: SeminarMobileComponent;
  let fixture: ComponentFixture<SeminarMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminarMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
