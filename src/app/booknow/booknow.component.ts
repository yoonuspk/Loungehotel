import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { UserService } from "../services/user.service";
import { User } from "../domains/user";
import { Booklist } from "../domains/booklist";
import { StorageService } from "../services/storage.service";
import { RoomsService } from "../services/rooms.service";
import { Room } from "../domains/rooms";
import { BookingService } from "../services/booking.service";
import { Booking } from "../domains/bookings";
export interface bookArg {
  roomObj:Room;
}
@Component({
  selector: "app-booknow",
  templateUrl: "./booknow.component.html",
  styleUrls: ["./booknow.component.scss"]
})

export class BooknowComponent extends DialogComponent<bookArg, any> implements bookArg, OnInit {
  roomObj: Room;
  userform: any;
  booklist: any;
  rooms: any;
  room: any;
  roomchecked: boolean;
  user: User;
  
  constructor(private fb:FormBuilder,private _dialogSvc: DialogService,private userS:UserService,
          private _StrS:StorageService,private roomS:RoomsService,
         private  bookingSvc:BookingService) { 
    super(_dialogSvc);
  }

  ngOnInit() {
    this.booklist=<Booklist>(this._StrS.getScope());
    
    console.log(this.booklist,this.roomObj);
    this.userform = this.fb.group({
      Name: [''],
      Email: [''],
      Address: [''],
      City: [''],
      State: [''],
      Country: [''],
      UserID: [''],
      UserName: [''],
      Password: [''],
      Role: [''],
      Mobile: ['']
    });
}
submit(){
  
      
        this.userS.createCustomer(this.prepareSaveUser())
          .subscribe(x => {
            console.log(x);this.user=x;
              this.roomS.getAllRooms().subscribe(x => {
              this.rooms = x;
              this.roomchecked=true;
                this.room = this.rooms.filter(x => x.RCatID == this.roomObj.RCatID && x.RSCatID == this.roomObj.RSCatID);
                this.bookingSvc.bookrooms(this.prepareSaveCustomer()).subscribe(x =>  console.log(x))
                window.alert("Booking Successfull");
                this.close();
              })})
      }
                
    prepareSaveUser(): User {
      console.log(this.userform.value);
      const formModel = this.userform.value;
      const savebooking: User = {
        Name: formModel.Name,
        Email: formModel.Email,
        Address: formModel.Address,
        City: formModel.City,
        State: formModel.State,
        Country: formModel.Country,
        UserID: "0",
        UserName: formModel.UserName,
        Password: formModel.Password,
        Role: "3",
        Mobile: formModel.Mobile,
      }
      console.log(savebooking);
      return savebooking;
    }

    prepareSaveCustomer(): Booking {
      // console.log(this.bookform.value);
      // const formModel = this.bookform.value;
      if(this.booklist){
      var days= this.booklist.StartDate.valueOf() -this.booklist.EndDate.valueOf();
      }
      if(this.room && this.booklist){
      const savebooking: Booking = {
        BID: null,
        UID: this.user[0].UserID,
        RID: this.room[0].RID,
        Days: days,
        StartDate: this.booklist.StartDate,
        EndDate: this.booklist.EndDate,
      }
      console.log(savebooking);
      return savebooking;
    }
    }

}

