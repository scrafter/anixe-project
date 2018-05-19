import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipListFiltersComponent } from './spaceship-list-filters.component';

describe('SpaceshipListFiltersComponent', () => {
  let component: SpaceshipListFiltersComponent;
  let fixture: ComponentFixture<SpaceshipListFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipListFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
