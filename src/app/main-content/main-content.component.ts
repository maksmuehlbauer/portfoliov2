import { Component } from '@angular/core';
import { LandingComponent } from "./landing/landing.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { MyWorkComponent } from "./my-work/my-work.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingComponent, AboutMeComponent, SkillSetComponent, MyWorkComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
