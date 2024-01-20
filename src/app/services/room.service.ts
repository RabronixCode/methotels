import { Injectable } from '@angular/core';

@Injectable()
export class RoomService {

  rooms: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: "R1",
      number: "1",
      price: "100"
    });
    this.insert({
      name: "R2",
      number: "2",
      price: "200"
    });
    this.insert({
      name: "R3",
      number: "3",
      price: "300"
    });
  }

  insert(room: {name: string, number: string, price: string}): void {
    this.rooms.push(room);
  }

  getAllRooms(){
    return this.rooms;
  }

  getPrice(nights: string, price: string) {
    let n = Number(nights);
    let p = Number(price);
    let r = n * p;
    return r.toString();
  }
}
