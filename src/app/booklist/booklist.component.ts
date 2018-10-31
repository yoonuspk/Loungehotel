import { Component, OnInit } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Booking } from "../domains/bookings";
import { BookingService } from "../services/booking.service";
import { UserService } from "../services/user.service";
import { User } from "../domains/user";
import { RoomsService } from "../services/rooms.service";
import { Room } from "../domains/rooms";
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { Router } from "@angular/router";
import { StorageService } from "../services/storage.service";

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
  booklistform: FormGroup;
  error:boolean=false;
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
    private roomS: RoomsService,
    private router:Router,
    private _Storage:StorageService) {
    super(_dialogSvc);
  }

  ngOnInit() {
 
    this.booklistform = this.fb.group({
   
      
      StartDate: ['',<any>Validators.required],
      EndDate: ['',<any>Validators.required],
      Adults:['',<any>Validators.required],
      Childrens:['']
    });
  }

  submit() {
    var booklist=({
      StartDate: this.booklistform.value.StartDate.formatted,
      EndDate: this.booklistform.value.EndDate.formatted,
      Adults:this.booklistform.value.Adults,
      Childrens:this.booklistform.value.Childrens,
    })
    this._Storage.setScope(booklist);
    this.close();
    this.router.navigate(['/room']);
  }

}
