import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaxulyPage } from './daxuly.page';

describe('DaxulyPage', () => {
  let component: DaxulyPage;
  let fixture: ComponentFixture<DaxulyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaxulyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaxulyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
