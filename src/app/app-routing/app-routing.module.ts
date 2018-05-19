import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { SpaceshipListComponent } from '../spaceship-list/spaceship-list.component';
import { SpaceshipDetailsComponent } from '../spaceship-details/spaceship-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'spaceship-list',
    component: SpaceshipListComponent,
  },
  {
    path: 'spaceship-details/:id',
    component: SpaceshipDetailsComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
})
export class AppRoutingModule {
}
