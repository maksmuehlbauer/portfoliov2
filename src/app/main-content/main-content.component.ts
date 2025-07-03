import { Component } from '@angular/core';
import { LandingComponent } from "./landing/landing.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillSetComponent } from "./skill-set/skill-set.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [LandingComponent, AboutMeComponent, SkillSetComponent, MyWorkComponent, ContactComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
