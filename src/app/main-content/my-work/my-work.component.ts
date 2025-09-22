import { Component, inject } from '@angular/core';
import { SingleWorkComponent } from "./single-work/single-work.component";
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [SingleWorkComponent, CommonModule, TranslateModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

  projectsData = inject(PortfolioService)
  
  constructor(private translate: TranslateService) {  }

  styleElements = [
    { src: './assets/img/my-projects/desk-bubble-1.png', top: '-30px', left: '563px', zIndex: '0'},
    { src: './assets/img/my-projects/desk-bubble-2.png', top: '89px', left: '1157px', zIndex: '0'},
    { src: './assets/img/my-projects/desk-bubble-5.png', top: '1103px', left: '100px', zIndex: '0'},
    { src: './assets/img/my-projects/desk-bubble-6.png', top: '1544px', left: '131px', zIndex: '0'},
    // { src: './assets/img/my-projects/desk-bubble-7.png', top: '2150px', left: '1242px', zIndex: '1'}, // 4th & 5th portfolio project
    // { src: './assets/img/my-projects/desk-bubble-8.png', top: '2643px', left: '593px', zIndex: '-1'} // 4th & 5th portfolio project
  ]

    borderStyleElements = [
    { src: './assets/img/my-projects/desk-bubble-3.png', top: '577px', left: '0', zIndex: '-1'},
    { src: './assets/img/my-projects/desk-bubble-4.png', top: '862px', left: '', right: '0', zIndex: '-1'},
  ]

  getDirection(i:number):string {
    return i % 2 === 0 ? '' : 'odd-row'
  }

  toggleLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }
}

