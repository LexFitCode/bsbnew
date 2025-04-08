import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-select-position',
  imports: [MatRadioModule],
  templateUrl: './select-position.component.html',
  styleUrl: './select-position.component.scss'
})
export class SelectPositionComponent {
  @Output() newItemEvent = new EventEmitter<any>();
  statsPlayer(position: string){
    console.log(position)
    this.newItemEvent.emit(position)
  }
  positions =["pitcher", "hitter"]
}
