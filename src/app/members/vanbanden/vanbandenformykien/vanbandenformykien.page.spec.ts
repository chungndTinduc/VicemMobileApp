import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandenformykienPage } from './vanbandenformykien.page';

describe('VanbandenformykienPage', () => {
  let component: VanbandenformykienPage;
  let fixture: ComponentFixture<VanbandenformykienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandenformykienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandenformykienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
