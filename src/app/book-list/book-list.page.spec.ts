import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListPage } from './book-list.page';

describe('BookListPage', () => {
  let component: BookListPage;
  let fixture: ComponentFixture<BookListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
