import { Component } from '@angular/core';
import { RoomService } from '../services/room.service';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-room-di',
  templateUrl: './room-di.component.html',
  styleUrl: './room-di.component.css'
})
export class RoomDiComponent {

  name: string = '';
  number: string = '';
  price: number = 0;
  rooms: Array<any> = [];
  isSubmitted: boolean = false;
  // private service: RoomService = inject(RoomService);
  calculatedPrice: string = '';

  constructor(private service: RoomService){
    this.rooms = this.service.getAllRooms();
    this.isSubmitted = this.rooms.length > 0;
  }

  onSubmit(name: HTMLInputElement, number: HTMLInputElement, price: HTMLInputElement){
    this.isSubmitted = true;
    this.service.insert({
      'name': name.value,
      'number': number.value,
      'price': price.value
    });
    return false;
  }

  getPrice(nights: HTMLInputElement, price: string) {
    this.calculatedPrice = this.service.getPrice(nights.value, price);
  }

}
