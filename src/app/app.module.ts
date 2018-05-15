import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpaceshipDetailsComponent } from './spaceship-details/spaceship-details.component';
import { SpaceshipListComponent } from './spaceship-list/spaceship-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpaceshipDetailsComponent,
    SpaceshipListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
