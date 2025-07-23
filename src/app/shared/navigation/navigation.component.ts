import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  menuIsVisible: boolean = false

  toggleMenu() {
    this.menuIsVisible = !this.menuIsVisible
    console.log(this.menuIsVisible)
  }


}
