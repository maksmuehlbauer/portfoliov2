import { Component } from '@angular/core';
import { LandingComponent } from "./landing/landing.component";
import { AboutMeComponent } from "./about-me/about-me.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingComponent, AboutMeComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
