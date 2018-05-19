import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipDetailsGalleryComponent } from './spaceship-details-gallery.component';

describe('SpaceshipDetailsGalleryComponent', () => {
  let component: SpaceshipDetailsGalleryComponent;
  let fixture: ComponentFixture<SpaceshipDetailsGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipDetailsGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipDetailsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
