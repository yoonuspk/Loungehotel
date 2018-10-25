import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { RoomsService } from './services/rooms.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  

  ],
  providers: [RoomsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
