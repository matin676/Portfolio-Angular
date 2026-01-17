import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterModule, NgOptimizedImage],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
