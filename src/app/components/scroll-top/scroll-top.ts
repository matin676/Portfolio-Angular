import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class ScrollTop {
  isVisible = signal(false);
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onWindowScroll() {
    if (this.isBrowser) {
      this.isVisible.set(window.scrollY > 300);
    }
  }

  scrollToTop() {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
