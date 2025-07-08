import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-work.component.html',
  styleUrl: './single-work.component.scss'
})
export class SingleWorkComponent {

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

textBoxAlign(itemIndex:number): string {
  return itemIndex % 2 === 0 ? '' : 'odd-text-box'
}

imgBoxAlign(itemIndex:number): string {
  return itemIndex % 2 === 0 ? '' : 'odd-img-box'
}



}
