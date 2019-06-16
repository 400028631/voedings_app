import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeschiedenisPage } from './geschiedenis.page';

describe('GeschiedenisPage', () => {
  let component: GeschiedenisPage;
  let fixture: ComponentFixture<GeschiedenisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeschiedenisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeschiedenisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
