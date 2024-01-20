import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, tap } from 'rxjs';
import { Room } from './room/room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomHttpServiceService {

  private apiUrl = 'http://localhost:3000/rooms';

  constructor(private _http: HttpClient) { }

  getRooms(): Observable<Room[]> { //umesto soba bilo je any
    return this._http.get<any[]>(this.apiUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
        new Room(item.id, item.name, item.number, item.description))),
    );
  }

  addRoom(room: any): Observable<any> {
    return this._http.post<any>(this.apiUrl, room);
  }

  updateRoom(room: any): Observable<any> {
    const url = `${this.apiUrl}/${room.id}`;
    return this._http.put<any>(url, room);
  }

  deleteRoom(roomId: number): Observable<any> {
    const url = `${this.apiUrl}/${roomId}`;
    return this._http.delete<any>(url);
  }
}
