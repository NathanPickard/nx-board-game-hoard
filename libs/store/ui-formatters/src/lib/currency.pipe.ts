import { Pipe, PipeTransform } from '@angular/core';
import { currencyFormat } from '@nx-board-game-hoard/shared/util-formatters';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(amount: unknown, ...args: unknown[]): unknown {
    return currencyFormat(amount);
  }

}
