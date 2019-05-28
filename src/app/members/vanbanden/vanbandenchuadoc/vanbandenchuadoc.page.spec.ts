import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanbandenchuadocPage } from './vanbandenchuadoc.page';

describe('VanbandenchuadocPage', () => {
  let component: VanbandenchuadocPage;
  let fixture: ComponentFixture<VanbandenchuadocPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanbandenchuadocPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanbandenchuadocPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
