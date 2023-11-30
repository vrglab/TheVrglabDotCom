import {Component, OnInit} from '@angular/core';
import { ServerRequestingService} from './server.requesting.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {GameComponent} from "./game/game.component";
import {CacheService} from "../../cache.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-games-page',
  standalone: true,
  imports: [CommonModule, HttpClientModule, GameComponent],
  templateUrl: './games-page.component.html',
  styleUrl: './games-page.component.css'
})
export class GamesPageComponent implements OnInit{
  data: any[] = [];
  context: string = 'itchio';

  constructor(private requestService: ServerRequestingService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.context = params['context'];
      this.loadData();
    });
  }
  reloadCache() {
    this.requestService.getData(this.context).subscribe(
      (response) => {
        if(this.context == 'gamejolt') {
          this.data = JSON.parse(response.contents)['payload']['games'];
        }
        if(this.context == 'itchio') {
          this.data = JSON.parse(response.contents)['games'];
        }
        CacheService.set("games-"+this.context, this.data);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  loadData() {
    if(CacheService.get("games-"+this.context) == null) {
      this.reloadCache();
    } else{
      // @ts-ignore
      this.data = CacheService.get("games-"+this.context);
    }
  }
}
