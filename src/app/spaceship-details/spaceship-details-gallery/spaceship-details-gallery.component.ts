import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-spaceship-details-gallery',
  templateUrl: './spaceship-details-gallery.component.html',
  styleUrls: ['./spaceship-details-gallery.component.scss']
})
export class SpaceshipDetailsGalleryComponent implements OnInit {
  @Input() photos = [];
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  prepareUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}
