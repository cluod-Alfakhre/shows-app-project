import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPagesComponent } from './search-pages.component';

describe('SearchPagesComponent', () => {
  let component: SearchPagesComponent;
  let fixture: ComponentFixture<SearchPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
