import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RadarsComponent} from "./radars/radars.component";
import {HomeComponent} from "./home/home.component";
import {InfractionsComponent} from "./infractions/infractions.component";
import {VehiclesComponent} from "./vehicles/vehicles.component";
import {ConsultRadarComponent} from "./consult-radar/consult-radar.component";
import {ConsultInfractionComponent} from "./consult-infraction/consult-infraction.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "radars", component: RadarsComponent},
  {path: "infractions", component: InfractionsComponent},
  {path: "vehicles", component: VehiclesComponent},
  {path: "consultRadar/:id", component: ConsultRadarComponent},
  {path: "consultInfraction/:id", component: ConsultInfractionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
