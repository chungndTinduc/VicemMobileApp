import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietcongviecPage } from './chitietcongviec.page';

describe('ChitietcongviecPage', () => {
  let component: ChitietcongviecPage;
  let fixture: ComponentFixture<ChitietcongviecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietcongviecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietcongviecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
