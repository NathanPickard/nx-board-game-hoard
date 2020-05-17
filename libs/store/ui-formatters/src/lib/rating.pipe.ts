import { Pipe, PipeTransform } from '@angular/core';
import { ratingFormat } from '@nx-board-game-hoard/shared/util-formatters';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(rating: unknown, ...args: unknown[]): unknown {
    return ratingFormat(rating);
  }

}
