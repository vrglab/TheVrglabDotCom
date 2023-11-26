import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GamesPageComponent } from './games-page/games-page.component';
import {HomePageComponent} from "./home-page/home-page.component";
import {SocialsPageComponent} from "./socials-page/socials-page.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'games', component: GamesPageComponent},
  {path: 'socials', component: SocialsPageComponent},
];
