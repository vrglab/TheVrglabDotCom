import {Component, Input} from '@angular/core';
import {CommonModule, formatCurrency} from '@angular/common';
import {Earnings, ItchioGame} from '../itchio-server-result';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() game: any | undefined;
  @Input() context: string = 'itchio';

  onClick(): void {
    if(this.context == 'itchio') {
      window.open(this.game?.url, '_blank');
    }
    if(this.context == 'gamejolt') {
      window.open('https://gamejolt.com/games/'+this.game?.slug+'/'+this.game?.id, '_blank');
    }
  }

  GetIconLink():string {
    if(this.context == 'itchio') {
      return this.game?.cover_url;
    }

    if(this.context == 'gamejolt') {
      return this.game?.img_thumbnail;
    }
    return '';
  }
}
