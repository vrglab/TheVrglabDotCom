import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  constructor(private router: Router) {
  }

  navigateToPages(page_name: string, context: any) {
    this.router.navigate(['/projects/'+page_name], { queryParams: { context: context } });
  }
}
