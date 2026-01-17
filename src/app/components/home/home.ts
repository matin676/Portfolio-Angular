import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TECH_STACK } from '../../shared/data';

@Component({
  selector: 'app-home',
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly techStack = TECH_STACK;

  get experience(): string {
    const startDate = new Date('2025-01-01');
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - startDate.getTime());
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    if (diffYears < 1) {
      return 'Less than 1 Year';
    }

    // Round to 1 decimal place if needed, or just floor it
    const years = Math.floor(diffYears);
    const suffix = years === 1 ? 'Year' : 'Years';

    return `${years}+ ${suffix}`;
  }
}
