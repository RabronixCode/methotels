import { Component, OnInit } from '@angular/core';
import { Room } from '../room/room.model';
import { RoomHttpServiceService } from '../room-http-service.service';

@Component({
  selector: 'app-room-http',
  templateUrl: './room-http.component.html',
  styleUrl: './room-http.component.css'
})
export class RoomHttpComponent implements OnInit{

  rooms!: Room[];
  newRoom!: Room;

  deleteStatus: 'success' | 'error' | null = null;
  addStatus: 'success' | 'error' | 'greskaUDodavanju' | null = null;

  constructor(private roomHttpService: RoomHttpServiceService){
    
  }

  addRoom(name: HTMLInputElement, number: HTMLInputElement, description: HTMLTextAreaElement): boolean {
    console.log(this.rooms);
    const descValue = Number(description.value);
    const nameValue = name.value.trim();
    const numberValue = number.value.trim();
    
    // Provera da li vec postoji soba sa istim nazivom
    const exists = this.rooms.some(room => room.name === name.value);
    //ovde je na nivou ako se korisi dugme
    if (nameValue.length < 6 || numberValue.length === 0 || descValue <= 0) {// Ako ovi uslovi ne budu zadovoljeni necemo dodati sobu
      this.addStatus = 'greskaUDodavanju';
      console.log('Neuspesno popunjavanje.');
    } else if (exists) {
      this.addStatus = 'error';
      console.log(`Soba sa nazivom ${name.value} već postoji.`);
    } else {
     // this.sobe.push(new Soba(naziv.value, link.value, 0, brGostijuValue));
     this.newRoom = new Room(0, name.value, number.value, description.value);
     this.roomHttpService.addRoom(this.newRoom).subscribe(newRoom =>{
      this.rooms.push(newRoom);
     });
    
      this.addStatus = 'success';
      console.log(`Soba sa nazivom ${name.value} uspešno dodata.`);
    }

    setTimeout(() => {
      this.addStatus = null;
    }, 3000); // 3 sekunde

    name.value = '';
    number.value = '';
    description.value = '';

    return false;
  }


  deleteRoom(name: string): boolean {
    const index = this.rooms.findIndex(s => s.name === name);
  
    if (index !== -1) {
       const novaSoba = this.rooms[index];
      this.roomHttpService.deleteRoom(novaSoba.id).subscribe(
        () => {
          this.rooms.splice(index, 1);
          this.deleteStatus = 'success';
          console.log(`Uspešno obrisana soba sa nazivom: ${name}`);
        },
        (error) => {
          this.deleteStatus = 'error';
          console.log(`Greška prilikom brisanja sobe sa nazivom ${name}: ${error}`);
        }
      );
    } else {
      this.deleteStatus = 'error';
      console.log(`Soba sa nazivom ${name} ne postoji.`);
    }
  
    setTimeout(() => {
      this.deleteStatus = null;
    }, 3000); // 3 sekunde
    return false;
  }

  ngOnInit(): void {
    this.roomHttpService.getRooms().subscribe((rooms) => {
      this.rooms = rooms;
      console.log(this.rooms);

    });
    

  }

}
