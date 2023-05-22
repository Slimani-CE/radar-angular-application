import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RadarServiceService} from "../services/radar-service.service";
import {Radar} from "../models/radar.model";

@Component({
  selector: 'app-consult-radar',
  templateUrl: './consult-radar.component.html',
  styleUrls: ['./consult-radar.component.css']
})

export class ConsultRadarComponent implements OnInit{

  public id: any;
  public focusedInfraction: any;

  public radar : any;

  constructor(private router: Router, private radareService : RadarServiceService){}

  ngOnInit(): void {
    // Get the id of the radar
    this.id = this.router.url.split("/")[2];
    // Get the radar
    this.radareService.getRadar(this.id).subscribe({
      next: radar => this.radar = radar,
      error: err => console.log(err)
    });
  }

  goBack() {
    // Navigate to the home page
    this.router.navigate(["radars"]);
  }

  delete(infraction: any) {
    // Get confirmation from the user
    if (confirm("Are you sure you want to delete this infraction?")) {
      // Delete the infraction
      this.radareService.deleteInfraction(infraction.id).subscribe({
        next: () => {
          // Refresh the page
          window.location.reload();
        },
        error: err => console.log(err)
      });
    }
  }

  isPopupOpen: boolean = false;

  openPopup(infraction: any) {
    this.isPopupOpen = true;
    // Focused infraction
    this.focusedInfraction = infraction;
  }

  closePopup() {
    this.isPopupOpen = false;
  }
}
