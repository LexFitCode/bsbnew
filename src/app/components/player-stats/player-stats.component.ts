import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  imports: [],
  templateUrl: './player-stats.component.html',
  styleUrl: './player-stats.component.scss'
})
export class PlayerStatsComponent {
  @Input() a: any
  @Input() market: any
  @Input() over: any
  @Input() under: any
  @Input() games: any
  @Input() gamesVs: any

}
