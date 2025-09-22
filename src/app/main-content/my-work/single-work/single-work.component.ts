import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-single-work',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './single-work.component.html',
  styleUrl: './single-work.component.scss'
})
export class SingleWorkComponent {

  constructor(private translate: TranslateService ) {  }

  @Input() projectData = {
        img: '',
        title: '',
        languages: '',
        descriptionen: '',
        descriptionde: '',
        projecturl: '',
        githuburl: ''
    }
  @Input() itemIndex: number = 0;

  get currentLanguage(): string {
    return this.translate.getCurrentLang();
  }

  textBoxAlign(itemIndex:number): string {
    return itemIndex % 2 === 0 ? '' : 'odd-text-box'
  }

  imgBoxAlign(itemIndex:number): string {
    return itemIndex % 2 === 0 ? '' : 'odd-img-box'
  }

  ngOnInit(): void {
      this.translate.addLangs(['de', 'en']);
      this.translate.use('en');
  }

  toggleLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }

  getProjectDescription(project: any): string {
    return this.currentLanguage === 'en' ? project.descriptionen : project.descriptionde;
  }


}
