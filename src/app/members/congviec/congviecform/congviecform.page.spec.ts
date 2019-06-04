import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongviecformPage } from './congviecform.page';

describe('CongviecformPage', () => {
  let component: CongviecformPage;
  let fixture: ComponentFixture<CongviecformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongviecformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongviecformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
