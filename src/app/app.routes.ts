import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesPageComponent } from './Pages/games-page/games-page.component';
import {HomePageComponent} from "./Pages/home-page/home-page.component";
import {SocialsPageComponent} from "./Pages/socials-page/socials-page.component";
import {ProjectsPageComponent} from "./Pages/projects-page/projects-page.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'projects/games', component: GamesPageComponent},
  {path: 'socials', component: SocialsPageComponent},
  {path: 'projects', component: ProjectsPageComponent}
];
