import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestellingPage } from './bestelling.page';

describe('BestellingPage', () => {
  let component: BestellingPage;
  let fixture: ComponentFixture<BestellingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestellingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestellingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
