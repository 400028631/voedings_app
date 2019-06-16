import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrankenPage } from './dranken.page';

describe('DrankenPage', () => {
  let component: DrankenPage;
  let fixture: ComponentFixture<DrankenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrankenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrankenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
