import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvondetenPage } from './avondeten.page';

describe('AvondetenPage', () => {
  let component: AvondetenPage;
  let fixture: ComponentFixture<AvondetenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvondetenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvondetenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
