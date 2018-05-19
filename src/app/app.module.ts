import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SpaceshipDetailsComponent } from './spaceship-details/spaceship-details.component';
import { SpaceshipListComponent } from './spaceship-list/spaceship-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './homepage/search/search.component';
import { FieldComponent } from './shared/components/field/field.component';
import { FieldInputComponent } from './shared/components/field-input/field-input.component';
import { FieldSelectComponent } from './shared/components/field-select/field-select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FieldDateComponent } from './shared/components/field-date/field-date.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { SpaceshipListItemComponent } from './spaceship-list/spaceship-list-item/spaceship-list-item.component';
import { SpaceshipListFiltersComponent } from './spaceship-list/spaceship-list-filters/spaceship-list-filters.component';

// for bigger application it will be good to create
// new module for spaceship
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SpaceshipDetailsComponent,
    SpaceshipListComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    FieldComponent,
    FieldInputComponent,
    FieldSelectComponent,
    FieldDateComponent,
    SpaceshipListItemComponent,
    SpaceshipListFiltersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
