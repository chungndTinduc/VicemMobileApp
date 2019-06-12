import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandiluongluanchuyenPage } from './vanbandiluongluanchuyen.page';

describe('VanbandiluongluanchuyenPage', () => {
  let component: VanbandiluongluanchuyenPage;
  let fixture: ComponentFixture<VanbandiluongluanchuyenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandiluongluanchuyenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandiluongluanchuyenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
