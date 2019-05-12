import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhbaPage } from './danhba.page';

describe('DanhbaPage', () => {
  let component: DanhbaPage;
  let fixture: ComponentFixture<DanhbaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhbaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
