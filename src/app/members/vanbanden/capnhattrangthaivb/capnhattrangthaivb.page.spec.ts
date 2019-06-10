import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhattrangthaivbPage } from './capnhattrangthaivb.page';

describe('CapnhattrangthaivbPage', () => {
  let component: CapnhattrangthaivbPage;
  let fixture: ComponentFixture<CapnhattrangthaivbPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapnhattrangthaivbPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapnhattrangthaivbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
