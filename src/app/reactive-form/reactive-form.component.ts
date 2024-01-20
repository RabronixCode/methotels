import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {


  newPrice: number = 0;
  ac: boolean = false;
  mb: boolean = false;
  s: boolean = false;

  constructor(private service: RoomService){
    
  }

  addRoomForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    number: new FormControl('', [Validators.min(1), Validators.required]),
    price: new FormControl(''),
    aircondition: new FormControl(''),
    minibar: new FormControl(''),
    sauna: new FormControl('')
  });

  onSubmit() {
    let name = this.addRoomForm.controls['name'].value;
    let number = this.addRoomForm.controls['number'].value;
    let price = this.addRoomForm.controls['price'].value;
    if (name && number && price){
      this.service.insert({
        'name': name,
        'number': number,
        'price': price
      })
    }
  }

  get name(){
    return this.addRoomForm.get('name');
  }

  get number(){
    return this.addRoomForm.get('number');
  }

  changePriceAc(n: number) {
    this.ac = !this.ac;
    if (this.ac){
      this.newPrice += n;
    }else{
      this.newPrice -= n;
    }
    
  }

  changePriceMb(n: number) {
    this.mb = !this.mb;
    if (this.mb){
      this.newPrice += n;
    }else{
      this.newPrice -= n;
    }
  }

  changePriceS(n: number) {
    this.s = !this.s;
    if (this.s){
      this.newPrice += n;
    }else{
      this.newPrice -= n;
    }
  }

  get aircondition(){
    return this.addRoomForm.get('aircondition');
  }

  get minibar(){
    return this.addRoomForm.get('minibar');
  }

  get sauna(){
    return this.addRoomForm.get('sauna');
  }

}
