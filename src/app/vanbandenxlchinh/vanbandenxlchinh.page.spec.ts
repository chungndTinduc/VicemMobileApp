import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandenxlchinhPage } from './vanbandenxlchinh.page';

describe('VanbandenxlchinhPage', () => {
  let component: VanbandenxlchinhPage;
  let fixture: ComponentFixture<VanbandenxlchinhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandenxlchinhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandenxlchinhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
