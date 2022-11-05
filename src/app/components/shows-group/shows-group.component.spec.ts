import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsGroupComponent } from './shows-group.component';

describe('ShowsGroupComponent', () => {
  let component: ShowsGroupComponent;
  let fixture: ComponentFixture<ShowsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
