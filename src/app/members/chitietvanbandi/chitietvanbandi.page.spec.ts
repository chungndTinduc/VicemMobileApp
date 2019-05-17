import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietvanbandiPage } from './chitietvanbandi.page';

describe('ChitietvanbandiPage', () => {
  let component: ChitietvanbandiPage;
  let fixture: ComponentFixture<ChitietvanbandiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietvanbandiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietvanbandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
