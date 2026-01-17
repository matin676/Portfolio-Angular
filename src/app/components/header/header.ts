import { Component, signal, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = signal(false);
  isDarkMode = signal(false);
  private isBrowser = signal(false);

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
    if (this.isBrowser()) {
      const storedTheme = localStorage.getItem('theme');
      if (
        storedTheme === 'dark' ||
        (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        this.isDarkMode.set(true);
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode.set(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen.update((val) => !val);
  }

  toggleDarkMode() {
    if (!this.isBrowser()) return;

    this.isDarkMode.update((val) => !val);

    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
