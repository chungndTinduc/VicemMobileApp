import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandiformykienPage } from './vanbandiformykien.page';

describe('VanbandiformykienPage', () => {
  let component: VanbandiformykienPage;
  let fixture: ComponentFixture<VanbandiformykienPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandiformykienPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandiformykienPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
