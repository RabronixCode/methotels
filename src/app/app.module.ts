import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { RoomComponent } from './room/room.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomDiComponent } from './room-di/room-di.component';
import { RoomService } from './services/room.service';
import { RoomHttpComponent } from './room-http/room-http.component';
import { RoomHttpServiceService } from './room-http-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    RoomComponent,
    NavbarComponent,
    RecommendationComponent,
    AboutUsComponent,
    SuggestionComponent,
    ReactiveFormComponent,
    RoomDiComponent,
    RoomHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    RoomService,
    RoomHttpServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
