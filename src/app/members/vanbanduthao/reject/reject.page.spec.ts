import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectPage } from './reject.page';

describe('RejectPage', () => {
  let component: RejectPage;
  let fixture: ComponentFixture<RejectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
