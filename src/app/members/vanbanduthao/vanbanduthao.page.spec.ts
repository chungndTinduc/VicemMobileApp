import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanduthaoPage } from './vanbanduthao.page';

describe('VanbanduthaoPage', () => {
  let component: VanbanduthaoPage;
  let fixture: ComponentFixture<VanbanduthaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbanduthaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbanduthaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
