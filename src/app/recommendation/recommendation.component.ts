import { Component, Input } from '@angular/core';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrl: './recommendation.component.css'
})
export class RecommendationComponent {

  @Input() rooms: Room[];
  static recommendations: Room[];

  constructor(){
    this.rooms = [];
  }

  pasteRoom(){
    RecommendationComponent.recommendations = this.rooms;
  }

  get recommendations(){
    return RecommendationComponent.recommendations;
  }
}
