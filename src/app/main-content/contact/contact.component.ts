import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactForm } from '../../contact.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  checkBoxAccepted: boolean = false;

  contactData: ContactForm =  {
    name: '',
    mail: '',
    message: '',
    privacy: false
  }

  http = inject(HttpClient)

  checkBoxState() {
    this.checkBoxAccepted = !this.checkBoxAccepted
  }

  onSubmit(ngForm: NgForm) {
    console.log(this.contactData)
  }

}
