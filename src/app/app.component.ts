import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import { RoomType, Room } from './domains/rooms';
import { CategoryService } from './services/category.service';
import { Category, SubCategory } from './domains/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rooms: Room[];
  categories: Category[];
  subcategories: SubCategory[];

  constructor(private roomSvc : RoomsService, private catSvc : CategoryService) { }

  title = 'motel';
  ngOnInit() {

    this.catSvc.getAllCategories().subscribe(x=>{this.categories=x;console.log(this.categories)})
    this.catSvc.getAllSubCategories().subscribe(x=>{this.subcategories=x;console.log(this.subcategories)})
    this.roomSvc.getAllRooms().subscribe(x=>{this.rooms=x;console.log(this.rooms)})

  }

  getCatName(id, cat){
    return cat[id-1].CatName;
  }
  
  getSubCatName(id, cat){
    return cat[id-1].SCatName;
  }
}
