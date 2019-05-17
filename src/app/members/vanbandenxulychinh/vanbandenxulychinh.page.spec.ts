import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandenxulychinhPage } from './vanbandenxulychinh.page';

describe('VanbandenxulychinhPage', () => {
  let component: VanbandenxulychinhPage;
  let fixture: ComponentFixture<VanbandenxulychinhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandenxulychinhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandenxulychinhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
