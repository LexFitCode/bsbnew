import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-data',
  imports: [],
  templateUrl: './player-data.component.html',
  styleUrl: './player-data.component.scss'
})
export class PlayerDataComponent {
  @Input() oddData:any = []
  @Input() position: any
  @Input() name: any
  @Input() odds: any
  @Input() namePlayer: any
  @Input() team: any

  showOdds(odd: any){
    console.log(odd)
    this.oddData = []
    this.oddData.market = odd.market
    this.oddData.line = odd.line
    this.oddData.over = odd.overOdd
    this.oddData.under = odd.underOdd
    this.oddData.games = odd.games
    this.oddData.gamesVs = odd.gamesVs
    this.oddData.vsPitcher = odd.vsPitcher
    this.oddData.vsPitcherThrow = odd.vsPitcherThrow
    this.oddData.hrr = odd.hrr
  }
}
