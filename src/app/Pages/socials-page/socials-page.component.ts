import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SocialMediaComponent} from "./social-media/social-media.component";

@Component({
  selector: 'app-socials-page',
  standalone: true,
  imports: [CommonModule, SocialMediaComponent],
  templateUrl: './socials-page.component.html',
  styleUrl: './socials-page.component.css'
})
export class SocialsPageComponent {

}
