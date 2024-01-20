import { Component, Output, EventEmitter } from '@angular/core';
import { Room } from '../room/room.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() copyRooms = new EventEmitter();
  static rooms: Room[] = [];
  isSubmitted: boolean = false;
  

  constructor(){
  }

  get rooms(){
    return FormComponent.rooms;
  }

  sendRooms(){
    this.copyRooms.emit(FormComponent.rooms);
  }

  onSubmit(name: HTMLInputElement, number: HTMLInputElement, description: HTMLTextAreaElement){
    this.isSubmitted = true;
    FormComponent.rooms.push(new Room(0, name.value, number.value, description.value));
    this.sendRooms();
    return false;
  }


}
