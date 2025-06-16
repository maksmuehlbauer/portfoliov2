import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  checkBoxAccepted: boolean = false;

  checkBoxState() {
    this.checkBoxAccepted = !this.checkBoxAccepted
  }
}
