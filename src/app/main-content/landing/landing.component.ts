import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../portfolio.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  menuIsVisible: boolean = false;
  private menuSubscription!: Subscription;


  constructor(public portfolioService: PortfolioService) {  }

  ngOnInit(){
    this.menuSubscription = this.portfolioService.menuIsVisible$.subscribe(
      isOpen => {this.menuIsVisible = isOpen}
    )
  }

  ngOnDestroy(){
    if (this.menuSubscription) {
      this.menuSubscription.unsubscribe();
    }
  }

}
