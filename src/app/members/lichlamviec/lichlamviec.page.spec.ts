import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LichlamviecPage } from './lichlamviec.page';

describe('LichlamviecPage', () => {
  let component: LichlamviecPage;
  let fixture: ComponentFixture<LichlamviecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LichlamviecPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LichlamviecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
