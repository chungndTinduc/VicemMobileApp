import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandiPage } from './vanbandi.page';

describe('VanbandiPage', () => {
  let component: VanbandiPage;
  let fixture: ComponentFixture<VanbandiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
