import { Component, OnInit } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Booking } from "../domains/bookings";
import { BookingService } from "../services/booking.service";
import { UserService } from "../services/user.service";
import { User } from "../domains/user";
import { RoomsService } from "../services/rooms.service";
import { Room } from "../domains/rooms";
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';

export interface bookArg {
  // selectedIncome:Income;
  // IncomeID:number;
}




@Component({
  selector: "app-booklist",
  templateUrl: "./booklist.component.html",
  styleUrls: ["./booklist.component.scss"]
})

export class BooklistComponent extends DialogComponent<bookArg, any> implements bookArg, OnInit {
  bookform: FormGroup;
  userform: FormGroup;
  user: User;
  rooms: Room[];
  room: Room[];
  roomchecked: boolean=false;

  myDatePickerOptions: IMyDpOptions = {
    selectorHeight:"220px",
    selectorWidth:"95%",
    showIncreaseDateBtn: true,
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    inline: false,
    disableUntil: {year: 2016, month: 8, day: 10}
  };

  // myDatePickerOptionss: IMyDpOptions = {
  //   selectorHeight : '50px',
  //   todayBtnTxt: 'Today',
  //   dateFormat: 'yyyy-mm-dd',
  //   firstDayOfWeek: 'mo',
  //   sunHighlight: true,
  //   inline: false,
  //   disableUntil: {year: 2016, month: 8, day: 10}
  // };



  constructor(private _dialogSvc: DialogService,
    private fb: FormBuilder,
    private bookingSvc: BookingService,
    private userS: UserService,
    private roomS: RoomsService) {
    super(_dialogSvc);
  }

  ngOnInit() {
    // this.bookingSvc.getAllRooms().subscribe(x => { console.log(x) });
    this.bookform = this.fb.group({
      BID: [''],
      UID: [''],
      RID: [''],
      Days: [''],
      StartDate: [''],
      EndDate: [''],
      Mobile: [''],
      Email: [''],
      RCatID: [''],
      RSCatID: ['']
    });
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

  submit() {
    let userCount: number = 0;
    let usr: User[];
    console.log(this.bookform.value);
    if (this.bookform.value.Mobile && this.bookform.value.Email) {
      this.userS.getAllCustomers().subscribe(x => {
        userCount = x.length;
        this.userS.createCustomer(this.prepareSaveUser())
          .subscribe(x => {
            console.log(x);
            this.userS.getAllCustomers().subscribe(x => {
              userCount = x.length;
              usr = x; this.user = usr[userCount - 1];
              // console.log(this.user);
              this.roomS.getAllRooms().subscribe(x => {
              this.rooms = x;
              this.roomchecked=true;
                this.room = this.rooms.filter(x => x.RCatID == this.bookform.value.RCatID && x.RSCatID == this.bookform.value.RSCatID);
                // console.log(this.room[0].RID);
                this.bookingSvc.bookrooms(this.prepareSaveCustomer()).subscribe(x =>
                  console.log(x))
              });
            })
          })
      })
    }


  }
  checkrent(){
    this.roomS.getAllRooms().subscribe(x => {
      this.rooms = x;
        this.room = this.rooms.filter(x => x.RCatID == this.bookform.value.RCatID && x.RSCatID == this.bookform.value.RSCatID);
    });
  }

  prepareSaveCustomer(): Booking {
    console.log(this.bookform.value);
    const formModel = this.bookform.value;
    if(this.roomchecked){
    const savebooking: Booking = {
      BID: null,
      UID: this.user.UserID,
      RID: this.room[0].RID,
      Days: formModel.Days,
      StartDate: formModel.StartDate,
      EndDate: formModel.EndDate,
    }
    console.log(savebooking);
    return savebooking;
  }
  }

  prepareSaveUser(): User {
    console.log(this.userform.value);
    const formModel = this.userform.value;
    const savebooking: User = {
      Name: formModel.Name,
      Email: this.bookform.value.Email,
      Address: formModel.Address,
      City: formModel.City,
      State: formModel.State,
      Country: formModel.Country,
      UserID: "0",
      UserName: formModel.UserName,
      Password: formModel.Password,
      Role: "3",
      Mobile: this.bookform.value.Mobile,
    }
    console.log(savebooking);
    return savebooking;
  }

}
