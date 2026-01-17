import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE } from '../../shared/data';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  protected readonly experience = EXPERIENCE;
}
