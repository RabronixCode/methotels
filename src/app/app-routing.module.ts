import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoomDiComponent } from './room-di/room-di.component';
import { RoomHttpComponent } from './room-http/room-http.component';

const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'recommendations',
    component: RecommendationComponent
  },
  {
    path: 'suggestions',
    component: SuggestionComponent
  },
  {
    path: 'r-form',
    component: ReactiveFormComponent
  },
  {
    path: 'room-di',
    component: RoomDiComponent
  },
  {
    path: 'api',
    component: RoomHttpComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
