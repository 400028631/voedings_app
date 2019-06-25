import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TussendoortjesPage } from './tussendoortjes.page';

describe('TussendoortjesPage', () => {
  let component: TussendoortjesPage;
  let fixture: ComponentFixture<TussendoortjesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TussendoortjesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TussendoortjesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
