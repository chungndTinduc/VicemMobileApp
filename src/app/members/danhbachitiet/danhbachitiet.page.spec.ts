import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhbachitietPage } from './danhbachitiet.page';

describe('DanhbachitietPage', () => {
  let component: DanhbachitietPage;
  let fixture: ComponentFixture<DanhbachitietPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhbachitietPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhbachitietPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
