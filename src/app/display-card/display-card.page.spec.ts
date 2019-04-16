import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCardPage } from './display-card.page';

describe('DisplayCardPage', () => {
  let component: DisplayCardPage;
  let fixture: ComponentFixture<DisplayCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
