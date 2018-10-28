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
  subcategories: SubCategory[];

  constructor(private roomSvc : RoomsService, private catSvc : CategoryService,private fb: FormBuilder,
    private router:Router,
    private _Storage:StorageService) { }

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
    this.router.navigate(['/aboutus']);
  }

          
  clickRoom(){
    var booklist=({
      StartDate: null,
      EndDate: null,
      Adults: 0,
      Childrens: 0,
    })
    this._Storage.setScope(booklist);
    this.router.navigate(['/room']);
  }
}
