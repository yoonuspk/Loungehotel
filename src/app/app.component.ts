import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import {
   Room } from './domains/rooms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { Category, SubCategory } from './domains/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  bform: FormGroup;
  rooms: Room[];
  // constructor(private roomSvc : RoomsService,private fb: FormBuilder,) { }
  date1: Date;
  categories: Category[];
  subcategories: SubCategory[];

  constructor(private roomSvc : RoomsService, private catSvc : CategoryService,private fb: FormBuilder,
              private router:Router) { }

  title = 'The Lounge Hotel';
  ngOnInit() {

    this.catSvc.getAllCategories().subscribe(x=>{this.categories=x;console.log(this.categories)})
    this.catSvc.getAllSubCategories().subscribe(x=>{this.subcategories=x;console.log(this.subcategories)})
    this.roomSvc.getAllRooms().subscribe(x=>{this.rooms=x;console.log(this.rooms)})
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

  getCatName(id, cat){
    return cat[id-1].CatName;
  }
  
  getSubCatName(id, cat){
    return cat[id-1].SCatName;
  }

  Aboutus(){
    console.log("hella");
    this.router.navigate(['/aboutus']);
  }
}
