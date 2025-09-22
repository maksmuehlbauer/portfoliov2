import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../portfolio.service';
import { Subscription } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  menuIsVisible: boolean = false;
  private menuSubscription!: Subscription;


  constructor(
    public portfolioService: PortfolioService,
    private translate: TranslateService
  ) 
  {  }

  ngOnInit(): void{
    this.menuSubscription = this.portfolioService.menuIsVisible$.subscribe(
      isOpen => {this.menuIsVisible = isOpen})
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
