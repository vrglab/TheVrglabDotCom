import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAzmMeIwu9RR4fevs5MlXzEIRhSF9SY3ZA",
  authDomain: "vrglab-50305.firebaseapp.com",
  projectId: "vrglab-50305",
  storageBucket: "vrglab-50305.appspot.com",
  messagingSenderId: "869444409030",
  appId: "1:869444409030:web:f8c196eac88e3b7b6129c7",
  measurementId: "G-PGRJH5WLSD"
};


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  app: any;
  constructor(private router: Router) {
    this.app = initializeApp(firebaseConfig);
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToGames() {
    this.router.navigate(['/games']);
  }

  navigateToSocials() {
    this.router.navigate(['/socials']);
  }
}
