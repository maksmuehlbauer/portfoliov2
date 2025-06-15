import { Component, inject } from '@angular/core';
import { SingleWorkComponent } from "./single-work/single-work.component";
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [SingleWorkComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  projectsData = inject(PortfolioService)

  getDirection(i:number):string {
    return i % 2 === 0 ? '' : 'odd-row'
  }
}
