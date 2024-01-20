import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDiComponent } from './room-di.component';

describe('RoomDiComponent', () => {
  let component: RoomDiComponent;
  let fixture: ComponentFixture<RoomDiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomDiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
