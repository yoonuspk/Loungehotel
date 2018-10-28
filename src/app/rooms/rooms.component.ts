import { Component, OnInit } from "@angular/core";
import { Room } from "../domains/rooms";
import { Category, SubCategory } from "../domains/category";
import { RoomsService } from "../services/rooms.service";
import { CategoryService } from "../services/category.service";
import { DialogService } from "ng2-bootstrap-modal";
import { BooknowComponent } from "../booknow/booknow.component";

@Component({
  selector: "app-rooms",
  templateUrl: "./rooms.component.html",
  styleUrls: ["./rooms.component.scss"]
})

export class RoomsComponent implements OnInit {

  rooms: Room[];
  categories: Category[];
  subcategories: SubCategory[];
  constructor(private roomSvc: RoomsService,
    private catSvc: CategoryService, private _dialogSvc: DialogService) {

  }

  ngOnInit() {

    this.catSvc.getAllCategories().subscribe(x => { this.categories = x; console.log(this.categories) })
    this.catSvc.getAllSubCategories().subscribe(x => { this.subcategories = x; console.log(this.subcategories) })
    this.roomSvc.getAllRooms().subscribe(x => { this.rooms = x; console.log(this.rooms) })
  }

  getCatName(id, cat) {
    return cat[id - 1].CatName;
  }

  getSubCatName(id, cat) {
    return cat[id - 1].SCatName;
  }

   
  booknow() {
    let disposable = this._dialogSvc
      .addDialog(BooknowComponent, {})
      .subscribe((editedIncome) => {
        if (editedIncome) {
          console.log(editedIncome);
          // let i = this.inc.indexOf(selectedInc);
          // this.inc[i]=editedIncome; //sync the changes back to data model
          // this.populateTable(this.inc); //refresh data table
        }
      });
  }
}

