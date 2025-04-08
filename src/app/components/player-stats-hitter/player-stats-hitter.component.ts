import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-stats-hitter',
  imports: [],
  templateUrl: './player-stats-hitter.component.html',
  styleUrl: './player-stats-hitter.component.scss'
})
export class PlayerStatsHitterComponent {
 @Input() stats : any = []
 @Input() versus : any = []
}
