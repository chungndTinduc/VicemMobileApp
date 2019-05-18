import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbanduthaodaxulyPage } from './vanbanduthaodaxuly.page';

describe('VanbanduthaodaxulyPage', () => {
  let component: VanbanduthaodaxulyPage;
  let fixture: ComponentFixture<VanbanduthaodaxulyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbanduthaodaxulyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbanduthaodaxulyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
