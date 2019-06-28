import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientenPage } from './ingredienten.page';

describe('IngredientenPage', () => {
  let component: IngredientenPage;
  let fixture: ComponentFixture<IngredientenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
