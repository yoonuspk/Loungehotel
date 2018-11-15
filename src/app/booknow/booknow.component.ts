import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { UserService } from "../services/user.service";
import { User } from "../domains/user";
import { Booklist } from "../domains/booklist";
import { StorageService } from "../services/storage.service";
import { RoomsService } from "../services/rooms.service";
import { Room } from "../domains/rooms";
import { BookingService } from "../services/booking.service";
import { Booking } from "../domains/bookings";
import * as moment from 'moment';
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
  error:boolean=false;
  days: number;
  constructor(private fb:FormBuilder,private _dialogSvc: DialogService,private userS:UserService,
          private _StrS:StorageService,private roomS:RoomsService,
         private  bookingSvc:BookingService) { 
    super(_dialogSvc);
  }

  ngOnInit() {
    this.booklist=<Booklist>(this._StrS.getScope());
    
    this.userform = this.fb.group({
      Name: ['',<any>Validators.required],
      Email: ['',<any>Validators.required],
      Address: [''],
      City: [''],
      State: [''],
      Country: [''],
      UserID: [''],
      UserName: [''],
      Password: [''],
      Role: [''],
      Mobile: ['',<any>Validators.required]
    });
   
      
   
}
submit(){
  this.userS.createCustomer(this.prepareSaveUser())
          .subscribe(x => {
            this.user=x;
              this.roomS.getAllRooms().subscribe(x => {
              this.rooms = x;
              this.roomchecked=true;
                this.room = this.rooms.filter(x => x.RCatID == this.roomObj.RCatID && x.RSCatID == this.roomObj.RSCatID);
                this.bookingSvc.bookrooms(this.prepareSaveCustomer()).subscribe(x =>  x)
                window.alert("Booking Successfull");
                this.close();
              })})
      }
                
    prepareSaveUser(): User {
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
      return savebooking;
    }

    prepareSaveCustomer() {
      // const formModel = this.bookform.value;
      if(this.booklist){
        console.log(this.booklist,this.booklist.StartDate);
        let StartD = this.booklist.StartDate.replace('-',',').replace('-',',');
        let EndD = this.booklist.EndDate.replace('-',',').replace('-',',');
        console.log(StartD,EndD);
        
        var a = moment(EndD);
        var b = moment(StartD);
         this.days=a.diff(b, 'days') 
         console.log(this.days);
         if(this.days == 0){
           this.days = 1;
         }
      }
      if(this.room && this.booklist){
        let Totalrent:number=0;
        console.log(this.booklist.Adults,this.room[0].Adults);
        if(this.booklist.Adults >this.room[0].Adults){
          if(this.booklist.Adults != 2){
           Totalrent=Number(this.room[0].Rent)+200;
          console.log(Totalrent);
          }
        }
        else{
          Totalrent=this.room[0].Rent;
        }
      const savebooking: Booking = {
        BID: null,
        UID: this.user[0].UserID,
        RID: this.room[0].RID,
        NotyfiedYN: null,
        Rent: Totalrent,
        Adult:  this.booklist.Adults,
        Children: this.booklist.Childrens,
        ExtraBedYN: null,
        Days: this.days,
        StartDate: this.booklist.StartDate,
        EndDate: this.booklist.EndDate,
      }
      console.log(savebooking);
      return savebooking;
    }
    }

}

