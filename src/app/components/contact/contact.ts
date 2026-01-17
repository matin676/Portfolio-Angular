import { Component, inject, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);

  ngAfterViewInit() {
    setTimeout(() => {
      AOS.refresh();
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }

  contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  isSubmitting = signal(false);
  isSuccess = signal(false);
  errorMessage = signal('');

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set('');

    this.contactService.sendMessage(this.contactForm.value).subscribe({
      next: (success) => {
        if (success) {
          this.isSuccess.set(true);
          this.contactForm.reset();
          setTimeout(() => this.isSuccess.set(false), 5000);
        }
      },
      error: () => {
        this.errorMessage.set('Something went wrong. Please try again.');
      },
      complete: () => {
        this.isSubmitting.set(false);
      },
    });
  }
}
