import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OntbijtPage } from './ontbijt.page';

describe('OntbijtPage', () => {
  let component: OntbijtPage;
  let fixture: ComponentFixture<OntbijtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OntbijtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OntbijtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
