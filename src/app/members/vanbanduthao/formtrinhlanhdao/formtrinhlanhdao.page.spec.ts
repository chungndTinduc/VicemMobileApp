import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtrinhlanhdaoPage } from './formtrinhlanhdao.page';

describe('FormtrinhlanhdaoPage', () => {
  let component: FormtrinhlanhdaoPage;
  let fixture: ComponentFixture<FormtrinhlanhdaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtrinhlanhdaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtrinhlanhdaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
