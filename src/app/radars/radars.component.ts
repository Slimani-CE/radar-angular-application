import {Component, OnInit} from '@angular/core';
import {provideRouter, Router} from "@angular/router";
import {RadarServiceService} from "../services/radar-service.service";
import {Radar} from "../models/radar.model";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-radars',
  templateUrl: './radars.component.html',
  styleUrls: ['./radars.component.css']
})
export class RadarsComponent implements OnInit{

  // public radars = [
  //   { id: 1, maxSpeed: 50, longitude: 1.1, latitude: 1.1, infractions: 10 },
  //   { id: 2, maxSpeed: 120, longitude: 15.1, latitude: 10.1, infractions: 3 },
  //   { id: 3, maxSpeed: 90, longitude: 1.1, latitude: 1.1, infractions: 0 },
  //   { id: 4, maxSpeed: 50, longitude: 1.1, latitude: 1.1, infractions: 10 },
  //   { id: 5, maxSpeed: 120, longitude: 15.1, latitude: 10.1, infractions: 3 },
  //   { id: 6, maxSpeed: 90, longitude: 1.1, latitude: 1.1, infractions: 0 },
  // ]

  public radars : Array<Radar> = [];

  ngOnInit(): void {
    this.getRadars();
    this.initFormBuilder();
  }
  constructor(private router: Router, private radarService: RadarServiceService, private http: HttpClient, private formBuilder: FormBuilder){

  }

  consultRadar(id: any) {
    // Navigate to the consult radar page "consultRadar/:id" with the id of the radar
    this.router.navigate(["consultRadar", id]);
  }

  deleteRadar(id: any) {
    // Get confirmation from the user
    if (confirm("Are you sure you want to delete this radar?")) {
      // Delete the radar
      this.radarService.deleteRadar(id).subscribe({
        next: () => {
          // Refresh the page
          window.location.reload();
        },
        error: err => console.log(err)
      });
    }
  }

  private getRadars() {
    // Get the list of radars
    this.radarService.getRadars().subscribe((data: any) => {
      this.radars = data;
    });
  }

  addRadar() {
    // Show popup
  }

  public id: any;
  public formValue: any;

  isFormPopupOpen: boolean = false;

  openFormPopup() {
    this.isFormPopupOpen = true;

  }

  closeFormPopup() {
    this.isFormPopupOpen = false;
  }
  // New radar form section -----------------------------
  public newRadarForm! : FormGroup;

  saveNewRadar() {
    let radar = this.newRadarForm.value;
    this.radarService.saveRadar(radar).subscribe({
      next: () => {
        // Refresh the page
        window.location.reload();
      }
    });
  }

  private initFormBuilder() {
    this.newRadarForm = this.formBuilder.group({
      maxSpeed: this.formBuilder.control('', [Validators.required, Validators.min(0)]),
      longitude: this.formBuilder.control('', [Validators.required]),
      latitude: this.formBuilder.control('', [Validators.required])
    });
  }

  // ----------------------------------------------------
}
