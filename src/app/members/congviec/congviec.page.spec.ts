import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongviecPage } from './congviec.page';

describe('CongviecPage', () => {
  let component: CongviecPage;
  let fixture: ComponentFixture<CongviecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongviecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongviecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
