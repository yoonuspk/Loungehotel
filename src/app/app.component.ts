import { Component } from '@angular/core';
import { RoomsService } from './services/rooms.service';
import {Room } from './domains/rooms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryService } from './services/category.service';
import { Category, SubCategory } from './domains/category';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';

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
  cat: Category[];
  subcategories: SubCategory[];
  subcat: SubCategory[];

  constructor(private roomSvc : RoomsService, private catSvc : CategoryService,private fb: FormBuilder,private sharedSvc : StorageService,
    private router:Router,) { }

  title = 'The Lounge Hotel';
  ngOnInit() {

    this.catSvc.getAllCategories().subscribe(x=>{this.categories=x;this.sharedSvc.setScopeCat(this.categories);})
    this.catSvc.getAllSubCategories().subscribe(x=>{this.subcategories=x;this.sharedSvc.setScopeSCat(this.subcategories);})

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
    this.cat = <Category[]>(this.sharedSvc.getScopeCat());
    return this.cat.find(x=>x.CatID == id).CatName;
  }

  getSubCatName(id) {
    this.subcat = <SubCategory[]>(this.sharedSvc.getScopeSCat());
    return this.subcat.find(x=>x.SCatID == id).SCatName;
    
  }

  Aboutus(){
    this.router.navigate(['/aboutus']);
  }
  
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

closeNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " icon";
  } else {
      x.className = "topnav";
  }
}
}
