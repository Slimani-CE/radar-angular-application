import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RadarServiceService} from "../services/radar-service.service";

@Component({
  selector: 'app-consult-infraction',
  templateUrl: './consult-infraction.component.html',
  styleUrls: ['./consult-infraction.component.css']
})
export class ConsultInfractionComponent {
  public id: any;
  public focusedInfraction: any;

  public infractions = [
    {id: 1, date: "2021-01-01", vehicleSpeed: 60, fineAmount: 1000, vehicle: {id: 1, regNumber: "AA-00-BB", brand: "Renault", model: "Clio"}, showDetails: false},
    {id: 2, date: "2021-01-02", vehicleSpeed: 130, fineAmount: 2000, vehicle: {id: 2, regNumber: "CC-00-DD", brand: "Peugeot", model: "208"}, showDetails: false},
    {id: 5, date: "2021-01-05", vehicleSpeed: 130, fineAmount: 2000, vehicle: {id: 2, regNumber: "CC-00-DD", brand: "Peugeot", model: "208"}, showDetails: false}
  ]

  constructor(private router: Router, private radarService: RadarServiceService){}

  ngOnInit(): void {
    // Get the id of the radar
    this.id = this.router.url.split("/")[2];
  }

  goBack() {
    // Navigate to the home page
    this.router.navigate(["radars"]);
  }

  delete(infraction: any) {
    // Get confirmation from the user
    if (confirm("Are you sure you want to delete this infraction?")) {
      // Delete the infraction
      this.radarService.deleteInfraction(infraction.id).subscribe({
        next: () => {
          // Refresh the page
          window.location.reload();
        }
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
