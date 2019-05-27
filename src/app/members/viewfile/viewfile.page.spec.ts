import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfilePage } from './viewfile.page';

describe('ViewfilePage', () => {
  let component: ViewfilePage;
  let fixture: ComponentFixture<ViewfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
