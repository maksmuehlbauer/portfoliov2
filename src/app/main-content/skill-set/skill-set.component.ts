import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../portfolio.service';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss'
})
export class SkillSetComponent {

  skillsData = inject(PortfolioService)

  constructor( private translate: TranslateService )  {  }

  toggleLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }
}
