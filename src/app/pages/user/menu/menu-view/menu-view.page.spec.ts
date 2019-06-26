import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuViewPage } from './menu-view.page';

describe('MenuViewPage', () => {
  let component: MenuViewPage;
  let fixture: ComponentFixture<MenuViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
