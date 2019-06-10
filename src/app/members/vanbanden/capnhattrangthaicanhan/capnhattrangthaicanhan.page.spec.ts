import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapnhattrangthaicanhanPage } from './capnhattrangthaicanhan.page';

describe('CapnhattrangthaicanhanPage', () => {
  let component: CapnhattrangthaicanhanPage;
  let fixture: ComponentFixture<CapnhattrangthaicanhanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapnhattrangthaicanhanPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapnhattrangthaicanhanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
