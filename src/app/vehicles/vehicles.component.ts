import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Vehicle} from "../models/vehicle.model";
import {RadarServiceService} from "../services/radar-service.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Owner} from "../models/owner.model";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit{
  private savedVehicle!: Object;
  private savedOwner!: Object;

  constructor(private router: Router, private radarService: RadarServiceService, private formBuilder: FormBuilder) {
  }

  public vehicles : Array<Vehicle> = [];

  consultRadar(id: any) {

  }

  ngOnInit(): void {
    // Get all vehicles
    this.radarService.getVehicles().subscribe({
      next: vehicles => this.vehicles = vehicles,
      error: err => console.log(err)
    });
    this.initFormBuilder();
  }

  deleteRadar(id: any) {
    // Get confirmation from the user
    if (confirm("Are you sure you want to delete this vehicle?")) {
      // Delete the vehicle
      this.radarService.deleteVehicle(id).subscribe({
        next: () => {
          // Refresh the page
          window.location.reload();
        },
        error: err => console.log(err)
      });
    }
  }

  public id: any;
  public focusedVehicle: any;
  isPopupOpen: boolean = false;

  openPopup(vehicle: any) {
    this.isPopupOpen = true;
    // Focused infraction
    this.focusedVehicle = vehicle;
  }

  closePopup() {
    this.isPopupOpen = false;
  }


  addVehicle() {
    // Show popup
  }


  public formValue: any;

  isFormPopupOpen: boolean = false;

  openFormPopup() {
    this.isFormPopupOpen = true;

  }

  closeFormPopup() {
    this.isFormPopupOpen = false;
  }

  // New radar form section -----------------------------
  public newVehicleForm!: FormGroup;
  saveNewVehicle() {
    let vehicleRegNumber = this.newVehicleForm.get("regNumber")?.value;
    let vehicleBrand = this.newVehicleForm.get("brand")?.value;
    let vehicleFiscalPower = this.newVehicleForm.get("fiscalPower")?.value;
    let vehicleModel = this.newVehicleForm.get("model")?.value;
    let vehicleOwnerName = this.newVehicleForm.get("ownerName")?.value;
    let vehicleOwnerBirthdate = this.newVehicleForm.get("ownerBirthdate")?.value;
    let vehicleOwnerEmail = this.newVehicleForm.get("ownerEmail")?.value;
    let vehicle = {
      "regNumber": vehicleRegNumber,
      "brand": vehicleBrand,
      "fiscalPower": vehicleFiscalPower,
      "model": vehicleModel,
    };
    let owner = {
        "name": vehicleOwnerName,
        "birthdate": vehicleOwnerBirthdate,
        "email": vehicleOwnerEmail
    };

    this.radarService.saveVehicle(vehicle).subscribe({
      next: data => this.savedVehicle = data,
      error: err => console.log(err)
    });
    this.radarService.saveOwner(owner).subscribe({
      next: data => this.savedOwner = data,
      error: err => console.log(err)
    });
    this.radarService.addVehicleToOwner(this.savedVehicle, this.savedOwner).subscribe({
      next: data => console.log(data),
    });
  }

  private initFormBuilder() {
    this.newVehicleForm = this.formBuilder.group({
      regNumber: this.formBuilder.control('', [Validators.required]),
      brand: this.formBuilder.control('', [Validators.required]),
      fiscalPower: this.formBuilder.control('', [Validators.required]),
      model: this.formBuilder.control('', [Validators.required]),
      ownerName: this.formBuilder.control('', [Validators.required]),
      ownerBirthdate: this.formBuilder.control('', [Validators.required]),
      ownerEmail: this.formBuilder.control('', [Validators.required]),
    });
  }
  // ----------------------------------------------------
}
