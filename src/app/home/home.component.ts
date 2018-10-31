import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { CategoryService } from "../services/category.service";
import { RoomsService } from "../services/rooms.service";
import { Room } from "../domains/rooms";
import { Category, SubCategory } from "../domains/category";
import { BooklistComponent } from "../booklist/booklist.component";
import { DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
  bform: FormGroup;
  rooms: Room[];
  // constructor(private roomSvc : RoomsService,private fb: FormBuilder,) { }
  date1: Date;
  categories: Category[];
  subcategories: SubCategory[];
  constructor(private roomSvc : RoomsService,
    private _dialogSvc:DialogService,
     private catSvc : CategoryService,private fb: FormBuilder) { 

  }

  ngOnInit() {

    this.catSvc.getAllCategories().subscribe(x=>{this.categories=x})
    this.catSvc.getAllSubCategories().subscribe(x=>{this.subcategories=x})
    this.roomSvc.getAllRooms().subscribe(x=>{this.rooms=x})
    
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

  getCatName(id) {
    if(id){
    return this.categories.find(x=>x.CatID == id).CatName;
    }
  }

  getSubCatName(id) {
    if(id){
    return this.subcategories.find(x=>x.SCatID == id).SCatName;
    }
  }
  roombook(){
    let disposable = this._dialogSvc
                .addDialog(BooklistComponent, {}) 
                .subscribe((editedIncome)=> {
                    if(editedIncome){
                        // let i = this.inc.indexOf(selectedInc);
                        // this.inc[i]=editedIncome; //sync the changes back to data model
                        // this.populateTable(this.inc); //refresh data table
                    }
                });
        }

}
