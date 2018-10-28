import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { RoomsService } from './services/rooms.service';
// import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from './services/booking.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryService } from './services/category.service';
import { HomeComponent } from './home/home.component';
import { DialogService, BootstrapModalModule } from 'ng2-bootstrap-modal';
import { BooklistComponent } from './booklist/booklist.component';
import { DialogModule } from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './aboutus/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UserService } from './services/user.service';

import {CalendarModule} from 'primeng/calendar';
import { MyDatePickerModule } from 'mydatepicker';
import { BooknowComponent } from './booknow/booknow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistComponent,
    AboutComponent,
    GalleryComponent,
    RoomsComponent,
    ContactusComponent,
    BooknowComponent
  ],
  imports: [
    AppRoutingModule,
    BootstrapModalModule.forRoot({container:document.body}),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    CalendarModule,
    MyDatePickerModule

    // DialogModule
  

  ],
  providers: [RoomsService,CategoryService,BookingService,UserService],
  entryComponents:[BooklistComponent,BooknowComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
