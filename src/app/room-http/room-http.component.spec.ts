import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHttpComponent } from './room-http.component';

describe('RoomHttpComponent', () => {
  let component: RoomHttpComponent;
  let fixture: ComponentFixture<RoomHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
