import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { RoomsService } from './services/rooms.service';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  

  ],
  providers: [RoomsService,CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
