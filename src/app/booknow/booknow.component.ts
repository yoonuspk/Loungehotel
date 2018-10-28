import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
export interface bookArg {
  // selectedIncome:Income;
  // IncomeID:number;
}
@Component({
  selector: "app-booknow",
  templateUrl: "./booknow.component.html",
  styleUrls: ["./booknow.component.scss"]
})

export class BooknowComponent extends DialogComponent<bookArg, any> implements bookArg, OnInit {
  userform: any;
  
  constructor(private fb:FormBuilder,private _dialogSvc: DialogService,) { 
    super(_dialogSvc);
  }

  ngOnInit() {
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

}
}
