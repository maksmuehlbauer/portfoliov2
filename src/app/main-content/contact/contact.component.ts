import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactForm } from '../../contact.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MailFeedbackComponent } from "./mail-feedback/mail-feedback.component";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MailFeedbackComponent, RouterModule],
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
  mailTest = true;
  isHovered:boolean = false;
  userMessageSend:boolean = false;

  mailFeedback() {
    this.userMessageSend = !this.userMessageSend
    setTimeout(() => {
      this.userMessageSend = !this.userMessageSend
    }, 5000);
  }

  post = {
    endPoint: 'https://maximilian-muehlbauer.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };


  checkBoxState() {
    this.checkBoxAccepted = !this.checkBoxAccepted
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            // this.userFeedback();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => 
            console.log('send post complete')
          });
          ngForm.resetForm();
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      console.log('send Testmode')
      this.mailFeedback();
      ngForm.resetForm();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0})
  }

}
