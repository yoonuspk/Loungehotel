import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { RoomType, Room } from './domains/rooms';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  bform: FormGroup;
  rooms: Room[];
  constructor(private roomSvc : RoomsService,private fb: FormBuilder,) { }
  date1: Date;
  title = 'motel';
  ngOnInit() {

    this.roomSvc.getAllRooms().subscribe(x=>{this.rooms=x;console.log(this.rooms)})
    this.bform = this.fb.group({
      RID: [''],
      RCatID: [''],
      RSCatID: [''],
      Rent: [''],
      CapID: [''],
      RoomCount: [''],
      Date:['']
    });
  }
}
