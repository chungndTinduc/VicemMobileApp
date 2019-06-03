import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabVanbandenPage } from './tab-vanbanden.page';

describe('TabVanbandenPage', () => {
  let component: TabVanbandenPage;
  let fixture: ComponentFixture<TabVanbandenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabVanbandenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabVanbandenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
