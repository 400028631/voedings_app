import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiePage } from './informatie.page';

describe('InformatiePage', () => {
  let component: InformatiePage;
  let fixture: ComponentFixture<InformatiePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformatiePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformatiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
