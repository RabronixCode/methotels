import { Component, Input } from '@angular/core';
import { Room } from '../room/room.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  static rooms: Room[];

  form: boolean = false;
  aboutUs: boolean = false;
  recommendation: boolean = false;
  suggestions: boolean = false;

  constructor(private router: Router){

  }

  get rooms(){
    return NavbarComponent.rooms;
  }

  showForm() {
    this.aboutUs = false;
    this.suggestions = false;
    this.recommendation = false;
    this.form = true;
  }

  navigateToAboutUs() {
    this.router.navigate(['about-us']);
  }

  showRecommendation() {
    this.form = false;
    this.aboutUs = false;
    this.suggestions = false;
    this.recommendation = true;
  }

  showSuggestions() { 
    this.router.navigate(['suggestions']);
  }

  copyRooms(rooms: Room[]){
    NavbarComponent.rooms = rooms;
  }

  navigateToRForm() {
    this.router.navigate(['r-form']);
  }

  navigateToDI() {
    this.router.navigate(['room-di']);
  }

  navigateToHttp() {
    this.router.navigate(['api']);
  }

}
