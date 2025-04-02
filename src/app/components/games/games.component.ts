import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent implements OnInit{
  @Input() games: any
  @Output() newItemEvent = new EventEmitter<any>();
  playersToFollowPersonalData: any[] = [];
  playersIcons: any= []
  constructor(private PlayersService: PlayersService) { }
  ngOnInit(): void {
    this.setIconsApi()
    //this.playersIcons = Object.values(icons) //offline
  }
  setIconsApi(){
    this.PlayersService.getPlayers().subscribe((data)=>{
      this.playersIcons = data
      console.log(data)
    })
  }
  playersToFollow(home: string, away: string) {
    console.log(home, away)
    this.playersToFollowPersonalData = [];
    const names = this.playersIcons;
    for (const property in names) {
      const team = names[property].team;
      if (home !== undefined || away !== undefined) {
        if (team?.includes(home) || team?.includes(away)) {
          this.playersToFollowPersonalData.push(names[property]);
        }
      }
    }
    this.newItemEvent.emit(this.playersToFollowPersonalData)
  }

}
