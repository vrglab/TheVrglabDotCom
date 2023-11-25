import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {CacheService} from "./cache.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToGames() {
    this.router.navigate(['/games']);
  }

  navigateToSkills() {
    this.router.navigate(['/skills']);
  }

  navigateToSocials() {
    this.router.navigate(['/socials']);
  }

  ngOnInit(): void {
  }
}
