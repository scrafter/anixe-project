import { Component, Input, OnInit } from '@angular/core';
import { Spaceship } from '../../shared/models/spaceship.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-spaceship-list-item',
  templateUrl: './spaceship-list-item.component.html',
  styleUrls: ['./spaceship-list-item.component.scss'],
})
export class SpaceshipListItemComponent implements OnInit {
  @Input() item: Spaceship;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  prepareAvatarUrl(url) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${url})`);
  }
}
