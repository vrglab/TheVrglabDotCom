import {Component, OnInit} from '@angular/core';
import { ItchioService, Game } from './itchio.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {GameComponent} from "./game/game.component";
import {AppComponent} from "../../app.component";
import {CacheService} from "../../cache.service";


@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, GameComponent],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.css'
})
export class GamesPageComponent implements OnInit{
  data: Game[] = [];

  constructor(private itchService: ItchioService) {}

  ngOnInit() {

    this.loadData();
  }

  loadData() {
    if(CacheService.get("games") == null) {
      this.itchService.getData().subscribe(
        (response) => {
          this.data = JSON.parse(response.contents)['games'];
          CacheService.set("games", this.data);
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    } else{
      // @ts-ignore
      this.data = CacheService.get("games");
    }
  }
}
