import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipListItemComponent } from './spaceship-list-item.component';

describe('SpaceshipListItemComponent', () => {
  let component: SpaceshipListItemComponent;
  let fixture: ComponentFixture<SpaceshipListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
