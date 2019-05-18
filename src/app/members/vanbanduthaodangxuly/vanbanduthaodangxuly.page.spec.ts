import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanduthaodangxulyPage } from './vanbanduthaodangxuly.page';

describe('VanbanduthaodangxulyPage', () => {
  let component: VanbanduthaodangxulyPage;
  let fixture: ComponentFixture<VanbanduthaodangxulyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbanduthaodangxulyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbanduthaodangxulyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
