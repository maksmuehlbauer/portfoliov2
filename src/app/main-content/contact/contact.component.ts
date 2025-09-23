import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactForm } from '../../contact.interface';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MailFeedbackComponent } from "./mail-feedback/mail-feedback.component";
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, MailFeedbackComponent, RouterModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor ( private translate: TranslateService ) {}

  styleElements = [
    { src: './assets/img/my-projects/desk-bubble-2.png', top: '450px', left: '125px', zIndex: '0'},
    { src: './assets/img/my-projects/desk-bubble-1.png', top: '700px', left: '1276px', zIndex: '0'}
  ]

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

  toggleLanguage(): void {
    const currentLang = this.translate.getCurrentLang();
    const newLang = currentLang === 'de' ? 'en' : 'de';
    this.translate.use(newLang);
  }

}
