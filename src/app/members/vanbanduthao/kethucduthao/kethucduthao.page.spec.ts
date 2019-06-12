import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KethucduthaoPage } from './kethucduthao.page';

describe('KethucduthaoPage', () => {
  let component: KethucduthaoPage;
  let fixture: ComponentFixture<KethucduthaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KethucduthaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KethucduthaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
