import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../shared/data';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  protected readonly skillCategories = SKILLS;
}
