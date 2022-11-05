import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenersMoviesComponent } from './geners-movies.component';

describe('GenersMoviesComponent', () => {
  let component: GenersMoviesComponent;
  let fixture: ComponentFixture<GenersMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenersMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenersMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
