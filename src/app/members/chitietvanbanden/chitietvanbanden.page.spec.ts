import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietvanbandenPage } from './chitietvanbanden.page';

describe('ChitietvanbandenPage', () => {
  let component: ChitietvanbandenPage;
  let fixture: ComponentFixture<ChitietvanbandenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietvanbandenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietvanbandenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
