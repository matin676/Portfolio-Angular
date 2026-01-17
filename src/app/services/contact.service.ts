import { Injectable } from '@angular/core';
import { delay, Observable, of, from } from 'rxjs';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {
    emailjs.init(environment.emailjs.publicKey);
  }

  sendMessage(formData: ContactForm): Observable<unknown> {
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      reply_to: formData.email,
      subject: formData.subject,
      user_msg: formData.message,
    };

    return from(
      emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey
      )
    );
  }
}
