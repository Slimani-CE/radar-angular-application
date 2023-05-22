import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RadarsComponent } from './radars/radars.component';
import { InfractionsComponent } from './infractions/infractions.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { ConsultRadarComponent } from './consult-radar/consult-radar.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ConsultInfractionComponent } from './consult-infraction/consult-infraction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RadarsComponent,
    InfractionsComponent,
    VehiclesComponent,
    ConsultRadarComponent,
    ConsultInfractionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
