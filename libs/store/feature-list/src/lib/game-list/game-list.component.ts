import { Component, OnInit } from '@angular/core';
import { GamesService } from '@nx-board-game-hoard/store/data-access-games';
import '@nx-board-game-hoard/shared/ui-tile';

@Component({
  selector: 'nx-board-game-hoard-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games$ = this.gamesService.games$;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }

}
