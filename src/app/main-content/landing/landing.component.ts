import { Component } from '@angular/core';
import { NavigationComponent } from "../../shared/navigation/navigation.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
