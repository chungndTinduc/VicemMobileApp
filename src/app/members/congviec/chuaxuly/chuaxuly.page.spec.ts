import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuaxulyPage } from './chuaxuly.page';

describe('ChuaxulyPage', () => {
  let component: ChuaxulyPage;
  let fixture: ComponentFixture<ChuaxulyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuaxulyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuaxulyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
