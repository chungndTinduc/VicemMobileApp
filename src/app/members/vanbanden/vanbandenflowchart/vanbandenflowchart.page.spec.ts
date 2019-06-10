import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandenflowchartPage } from './vanbandenflowchart.page';

describe('VanbandenflowchartPage', () => {
  let component: VanbandenflowchartPage;
  let fixture: ComponentFixture<VanbandenflowchartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandenflowchartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandenflowchartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
