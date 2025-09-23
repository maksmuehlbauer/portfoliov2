import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor( private translate: TranslateService ) {  }

  ngOnInit(): void{
    this.translate.addLangs(['de', 'en']);
    this.translate.use('de');
  }

  toggleLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }

}
