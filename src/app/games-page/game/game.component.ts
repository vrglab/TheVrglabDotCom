import {Component, Input} from '@angular/core';
import {CommonModule, formatCurrency} from '@angular/common';
import {Earnings, Game} from '../itchio.service';
@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {
  @Input() game: Game | undefined;

  protected readonly formatCurrency = formatCurrency;

  removeTrailingZeros(number: number | undefined): number {
    const numberString = number?.toString();
    const trimmedString = numberString?.replace(/\.?0+$/, '');
    return parseFloat(trimmedString == undefined ? '0' : trimmedString);
  }

  formatMoney(value: number | undefined, currency: string = 'USD', locales: string = 'en-US'): string {
    const formatter = new Intl.NumberFormat(locales, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
    });

    return formatter.format(value == undefined ? 0 : this.removeTrailingZeros(value));
  }
}
