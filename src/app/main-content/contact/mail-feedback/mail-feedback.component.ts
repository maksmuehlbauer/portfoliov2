import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mail-feedback',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './mail-feedback.component.html',
  styleUrl: './mail-feedback.component.scss'
})
export class MailFeedbackComponent {

  constructor ( private translate: TranslateService ) {  }

  toggleLanguage(): void {
      const currentLang = this.translate.getCurrentLang();
      const newLang = currentLang === 'de' ? 'en' : 'de';
      this.translate.use(newLang);
    }

}
