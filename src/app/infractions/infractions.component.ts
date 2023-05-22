import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Infraction} from "../models/infraction.model";
import {RadarServiceService} from "../services/radar-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-infractions',
  templateUrl: './infractions.component.html',
  styleUrls: ['./infractions.component.css']
})
export class InfractionsComponent implements OnInit{

  constructor(private router: Router, private radarService: RadarServiceService, private formBuilder: FormBuilder) {
  }

  public infractions : Array<Infraction> = [];

  consultRadar(id: any) {
    // Navigate to the consult radar page "consultRadar/:id" with the id of the radar
    this.router.navigate(["consultInfraction", id]);
  }

  ngOnInit(): void {
    // Get all infractions
    this.radarService.getInfractions().subscribe({
      next: infractions => this.infractions = infractions,
      error: err => console.log(err)
    })
    // Initialize the form builder
    this.initFormBuilder();
  }

  deleteRadar(id: any) {
    // Get confirmation from the user
    if (confirm("Are you sure you want to delete this infraction?")) {
      // Delete the infraction
      this.radarService.deleteInfraction(id).subscribe({
        next: () => {
          // Refresh the page
          window.location.reload();
        },
        error: err => console.log(err)
      });
    }
  }

  public id: any;
  public focusedInfraction: any;

  isPopupOpen: boolean = false;

  openPopup(vehicle: any) {
    this.isPopupOpen = true;
    // Focused infraction
    this.focusedInfraction = vehicle;
  }

  closePopup() {
    this.isPopupOpen = false;
  }

  public formValue: any;

  isFormPopupOpen: boolean = false;

  openFormPopup() {
    this.isFormPopupOpen = true;

  }

  closeFormPopup() {
    this.isFormPopupOpen = false;
  }

  addInfraction() {

  }

  // New radar form section -----------------------------
  public newInfractionForm! : FormGroup;

  saveNewInfraction() {
    let radarId = this.newInfractionForm.get("radarId")?.value;
    let vehicleId = this.newInfractionForm.get("vehicleId")?.value;
    let vehicleSpeed = this.newInfractionForm.get("vehicleSpeed")?.value;
    this.radarService.saveInfraction(radarId, vehicleId, vehicleSpeed).subscribe({
      next: () => {
        // Refresh the page
        window.location.reload();
      }
    });
    console.log("DEBUG")
  }

  private initFormBuilder() {
    this.newInfractionForm = this.formBuilder.group({
      radarId: this.formBuilder.control('', [Validators.required]),
      vehicleId: this.formBuilder.control('', [Validators.required]),
      vehicleSpeed: this.formBuilder.control('', [Validators.required])
    });
  }
  // ----------------------------------------------------
}
