import { Component, Input, OnInit } from '@angular/core';
import { Room } from './room.model';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit{

  @Input() room: Room;

  constructor(){
    this.room = new Room(1, 'a', 'a', 'a');
  }

  ngOnInit(): void {
    
  }
}
