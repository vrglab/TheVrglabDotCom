import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  yearsSince2018: number;

  constructor() {
    this.yearsSince2018 = this.calculateYearsSince2018();
  }
  calculateYearsSince2018(): number {
    const currentYear = new Date().getFullYear();
    const year2018 = 2018;
    return currentYear - year2018;
  }
}
