import { Component, OnInit } from "@angular/core";
import { Room } from "../domains/rooms";
import { Category, SubCategory } from "../domains/category";
import { RoomsService } from "../services/rooms.service";
import { CategoryService } from "../services/category.service";
import { DialogService } from "ng2-bootstrap-modal";
import { BooknowComponent } from "../booknow/booknow.component";
import { Booklist } from "../domains/booklist";
import { StorageService } from "../services/storage.service";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"]
})

export class RoomsComponent implements OnInit {

  rooms: Room[];
  categories: Category[];
  subcategories: SubCategory[];
  booklist: any;
  filteredArray: Room[];
  constructor(private roomSvc: RoomsService,
    private catSvc: CategoryService, private _dialogSvc: DialogService,
    private _StrS:StorageService) {

  }

  ngOnInit() {
    this.booklist=<Booklist>(this._StrS.getScope());
    
    
    if((this.booklist) == false){
      this.roomSvc.getAllRooms().subscribe(x => { this.rooms = x;this.filteredArray = this.rooms;})
    }
    else{
    this.roomSvc.getAllRooms().subscribe(x => { this.rooms = x;  this.filteredArray = this.rooms.filter(x=>x.Adults <= this.booklist.Adults); })
    }
    this.catSvc.getAllCategories().subscribe(x => { this.categories = x; })
    this.catSvc.getAllSubCategories().subscribe(x => { this.subcategories = x;  })
   }

  getCatName(id) {
    return this.categories.find(x=>x.CatID == id).CatName;
  }

  getSubCatName(id) {
    return this.subcategories.find(x=>x.SCatID == id).SCatName;
  }


   
  booknow(room) {
    
    let disposable = this._dialogSvc
      .addDialog(BooknowComponent, {roomObj:room})
      .subscribe((editedIncome) => {
        if (editedIncome) {
          // let i = this.inc.indexOf(selectedInc);
          // this.inc[i]=editedIncome; //sync the changes back to data model
          // this.populateTable(this.inc); //refresh data table
        }
      });
  }
}

