import { Component } from '@angular/core';
import { LandingComponent } from "./landing/landing.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
