import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanduthaochuaxulyPage } from './vanbanduthaochuaxuly.page';

describe('VanbanduthaochuaxulyPage', () => {
  let component: VanbanduthaochuaxulyPage;
  let fixture: ComponentFixture<VanbanduthaochuaxulyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbanduthaochuaxulyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbanduthaochuaxulyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
