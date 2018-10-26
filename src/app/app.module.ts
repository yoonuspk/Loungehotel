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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooklistComponent
  ],
  imports: [
    BootstrapModalModule.forRoot({container:document.body}),
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DialogModule,
    // DialogModule
  

  ],
  providers: [RoomsService,CategoryService,BookingService],
  entryComponents:[BooklistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
