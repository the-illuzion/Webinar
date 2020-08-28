import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarPageComponent } from './seminar-page.component';

describe('SeminarPageComponent', () => {
  let component: SeminarPageComponent;
  let fixture: ComponentFixture<SeminarPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminarPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
