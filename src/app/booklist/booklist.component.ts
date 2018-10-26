import { Component, OnInit } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
import { FormGroup, FormBuilder } from "@angular/forms";
import { Booking } from "../domains/bookings";
import { BookingService } from "../services/booking.service";

export interface bookArg {
  // selectedIncome:Income;
  // IncomeID:number;
}

@Component({
  selector: "app-booklist",
  templateUrl: "./booklist.component.html",
  styleUrls: ["./booklist.component.scss"]
})

export class BooklistComponent extends DialogComponent<bookArg,any> implements bookArg,OnInit {
  bookform: FormGroup;
  
  constructor( private _dialogSvc: DialogService,
    private fb: FormBuilder,
    private bookingSvc:BookingService) { 
    super(_dialogSvc);
  }

  ngOnInit() {
    this.bookingSvc.getAllRooms().subscribe(x=>{console.log(x)});
    this.bookform = this.fb.group({
      BID: [''],
      UID: [''],
      RID: [''],
      Days: [''],
      StartDate: [''],
      EndDate: [''],
    });
  }

  submit(){
    console.log(this.bookform.value);
      this.bookingSvc.bookrooms(this.prepareSaveCustomer()).subscribe(x=>{
        console.log(x)});
        
  }
  
   prepareSaveCustomer():Booking {
    console.log(this.bookform.value);
    const formModel = this.bookform.value;
      const savebooking: Booking = {
        BID: null,
        UID:"1",
        RID: "1",
        Days: formModel.Days,
        StartDate: formModel.StartDate,
        EndDate: formModel.EndDate,
      }
    console.log(savebooking);
    return savebooking;
  }
  
}
