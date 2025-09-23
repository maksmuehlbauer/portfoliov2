import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../portfolio.service';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent implements OnInit, OnDestroy {

  menuIsVisible: boolean = false;
  isHeaderHidden: boolean = false; // Neue Variable für die Scroll-Funktion
  private menuSubscription!: Subscription;


  constructor(
    public portfolioService: PortfolioService,
    private translate: TranslateService
  ) 
  {  }

  ngOnInit(){
    this.menuSubscription = this.portfolioService.menuIsVisible$.subscribe(
      isOpen => {this.menuIsVisible = isOpen})
  }

  ngOnDestroy(){
    if (this.menuSubscription) {
      this.menuSubscription.unsubscribe();
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (window.scrollY > 0) {
      this.isHeaderHidden = true; // Verstecke den Header, wenn nach unten gescrollt wird
    } else {
      this.isHeaderHidden = false; // Zeige den Header an, wenn ganz oben gescrollt wird
    }
  }

  toggleLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }


}