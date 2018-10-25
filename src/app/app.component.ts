import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { RoomType, Room } from './domains/rooms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rooms: Room[];
  constructor(private roomSvc : RoomsService) { }

  title = 'motel';
  ngOnInit() {

    this.roomSvc.getAllRooms().subscribe(x=>{this.rooms=x;console.log(this.rooms)})

  }
}
