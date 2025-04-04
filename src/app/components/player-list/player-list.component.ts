import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-player-list',
  imports: [],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss'
})
export class PlayerListComponent {
  @Input() players: any
  @Input() position: any
  @Output() newItemEvent = new EventEmitter<any>();
  statsPlayer(name:string){

    this.newItemEvent.emit({name: name, position: this.position})
  }
}
