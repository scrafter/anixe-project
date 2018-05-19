import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipDetailsPackagesComponent } from './spaceship-details-packages.component';

describe('SpaceshipDetailsPackagesComponent', () => {
  let component: SpaceshipDetailsPackagesComponent;
  let fixture: ComponentFixture<SpaceshipDetailsPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipDetailsPackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipDetailsPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
