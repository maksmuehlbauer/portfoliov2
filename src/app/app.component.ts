import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./shared/navigation/navigation.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { PortfolioService } from './portfolio.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent, FooterComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  currentLanguage: string = 'en';
  menuIsVisible: boolean = false;
  private menuSubscription!: Subscription;
  public isLargeScreen: boolean = false

  constructor( 
    private translate: TranslateService,
    public portfolioService: PortfolioService
  ) {  }

  ngOnInit(): void{
    this.menuSubscription = this.portfolioService.menuIsVisible$.subscribe(
      isOpen => {this.menuIsVisible = isOpen})
    this.translate.addLangs(['de', 'en']);
    this.translate.use('en');
    // this.checkScreensize();
  }

  ngOnDestroy(){
    if (this.menuSubscription) {
      this.menuSubscription.unsubscribe();
    }
  }

  toggleLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }

}
