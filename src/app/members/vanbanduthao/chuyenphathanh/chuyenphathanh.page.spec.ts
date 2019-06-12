import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenphathanhPage } from './chuyenphathanh.page';

describe('ChuyenphathanhPage', () => {
  let component: ChuyenphathanhPage;
  let fixture: ComponentFixture<ChuyenphathanhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenphathanhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenphathanhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
