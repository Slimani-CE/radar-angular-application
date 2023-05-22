import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    // Set the active action
    this.setActive();
  }

  // Set the active action
  private setActive() {
    this.actions.forEach((element: any) => {
      if (window.location.pathname === element.link) {
        element.active = true;
      }
      else{
        element.active = false;
      }
    });
  }

  title = 'application';
  public actions = [
    { name: "Home", link: "/home", icon: "bi bi-house", active: true },
    { name: "Radars", link: "/radars", icon: "bi bi-speedometer2", active: false },
    { name: "Infractions", link: "/infractions", icon: "bi bi-database-fill", active: false },
    { name: "Vehicles", link: "/vehicles", icon: "bi bi-car-front-fill", active: false },
  ]

  public changeActive(action: any) {
    this.actions.forEach((element: any) => {
      element.active = false;
    });
    action.active = true;
  }

}
